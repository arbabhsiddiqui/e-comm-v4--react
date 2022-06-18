import { useDispatch, useSelector } from "react-redux";

import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import {
  ProductCartContainer,
  Footer,
  Name,
  Price,
} from "./product-card.styles";

import { addItemToCart } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const { imageUrl, price, name } = product;

  const clickHandler = (e) => {
    e.preventDefault();
    dispatch(addItemToCart(cartItems, product));
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
