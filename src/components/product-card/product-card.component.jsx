import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import {
  ProductCartContainer,
  Footer,
  Name,
  Price,
} from "./product-card.styles";
const ProductCard = ({ product }) => {
  const { imageUrl, price, name } = product;

  const { addItemToCart } = useContext(CartContext);

  const clickHandler = (e) => {
    e.preventDefault();
    addItemToCart(product);
    console.log("click", product.id);
  };
  return (
    <ProductCartContainer>
      <img src={imageUrl} alt={imageUrl} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={clickHandler}>
        Add to Card
      </Button>
    </ProductCartContainer>
  );
};

export default ProductCard;
