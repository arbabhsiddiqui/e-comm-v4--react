import React from "react";
import ProductCard from "../product-card/product-card.components";

import { useNavigate } from "react-router-dom";

import "./category-preview.styles.scss";

const CategoryPreview = ({ title, products }) => {
  const navigate = useNavigate();

  const navigationHandler = () => {
    navigate(title);
  };

  return (
    <div className="category-preview-container">
      <h2>
        <span className="title" onClick={navigationHandler}>
          {title.toUpperCase()}
        </span>
      </h2>
      <div className="preview">
        {products
          .filter((_, index) => index < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default CategoryPreview;
