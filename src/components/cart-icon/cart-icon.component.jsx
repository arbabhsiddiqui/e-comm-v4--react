import { useContext } from "react";

import { ReactComponent as ShoppingIcon } from "../../assets/images/shopping-bag.svg";
import { CartContext } from "../../contexts/cart.context";
import { CartIconContainer, ItemCount } from "./cart-icon.styles";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const toggleHandler = (e) => {
    e.preventDefault();
    setIsCartOpen(!isCartOpen);
  };
  return (
    <>
      <CartIconContainer onClick={toggleHandler}>
        <ShoppingIcon />
        <ItemCount>{cartCount}</ItemCount>
      </CartIconContainer>
    </>
  );
};

export default CartIcon;
