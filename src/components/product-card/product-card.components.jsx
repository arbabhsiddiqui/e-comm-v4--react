import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import Button from "../button/button.component";
import "./product-card.styles.scss";
const ProductCard = ({ product }) => {
  const { imageUrl, price, name } = product;

  const { addItemToCart } = useContext(CartContext);

  const clickHandler = (e) => {
    e.preventDefault();
    addItemToCart(product);
    console.log("click", product.id);
  };
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={imageUrl} />
      <div className="footer">
        <div className="name">{name}</div>
        <div className="price">{price}</div>
      </div>
      <Button buttonType="inverted" onClick={clickHandler}>
        Add to Card
      </Button>
    </div>
  );
};

export default ProductCard;
