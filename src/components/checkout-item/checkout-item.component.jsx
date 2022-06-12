import { useContext } from "react";
import "./checkout-item.styles.scss";
import { CartContext } from "../../contexts/cart.context";
const CheckOutItem = ({ cartItem }) => {
  const { cartItems, removeItemToCart, addItemToCart, clearItem } =
    useContext(CartContext);

  const clearItemHandler = () => {
    clearItem(cartItem);
  };

  const addItemHandler = () => {
    addItemToCart(cartItem);
  };

  const removeItemHandler = () => {
    removeItemToCart(cartItem);
  };

  const { name, price, imageUrl, quantity } = cartItem;
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt="" />
      </div>
      <div className="name">{name}</div>
      <div className="quantity">
        <div className="arrow" onClick={removeItemHandler}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addItemHandler}>
          &#10095;
        </div>
      </div>

      <div className="price">{price}</div>
      <div className="remove-button" onClick={clearItemHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckOutItem;
