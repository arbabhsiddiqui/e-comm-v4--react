import React from "react";

import Button from "../button/button.component";
import "./product-card.styles.scss";
const ProductCard = ({ product }) => {
  const { imageUrl, price, name } = product;
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={imageUrl} />
      <div className="footer">
        <div className="name">{name}</div>
        <div className="price">{price}</div>
      </div>
      <Button buttonType="inverted">Add to Card</Button>
    </div>
  );
};

export default ProductCard;
