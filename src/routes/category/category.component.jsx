import { Fragment, useContext, useEffect, useState } from "react";
import ProductCard from "../../components/product-card/product-card.components";

import { CategoriesContext } from "../../contexts/categories.context";
import { useParams } from "react-router-dom";
import "./category.styles.scss";

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);

  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <h1 className="category-title">{category}</h1>
      <div className="category-container">
        {products &&
          products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
      </div>
    </Fragment>
  );
};

export default Category;
