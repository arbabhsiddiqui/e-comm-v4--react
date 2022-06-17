import { useSelector } from "react-redux";
import { Fragment, useContext, useEffect, useState } from "react";

import ProductCard from "../../components/product-card/product-card.components";

import { useParams } from "react-router-dom";
import { CategoryContainer, Title } from "./category.styles.jsx";

import { selectCategoriesMap } from "../../store/categories/categories.selector.js";

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector((state) => selectCategoriesMap(state));

  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <Title>{category.toUpperCase()}</Title>
      <CategoryContainer>
        {products &&
          products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
      </CategoryContainer>
    </Fragment>
  );
};

export default Category;
