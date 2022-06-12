import { useContext } from "react";

import { ReactComponent as ShoppingIcon } from "../../assets/images/shopping-bag.svg";
import { CartContext } from "../../contexts/cart.context";
import "./cart-icon.styles.scss";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const toggleHandler = (e) => {
    e.preventDefault();
    setIsCartOpen(!isCartOpen);
  };
  return (
    <>
      <div className="cart-icon-container" onClick={toggleHandler}>
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">{cartCount}</span>
      </div>
    </>
  );
};

export default CartIcon;
