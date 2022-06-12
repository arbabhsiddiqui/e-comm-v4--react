import { useContext } from "react";
import CheckOutItem from "../../components/checkout-item/checkout-item.component";
import { CartContext } from "../../contexts/cart.context";
import "./checkout.styles.scss";

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  // const addQuantityHandler = (e) => {
  //   console.log("add", e.target);
  // };

  // const subtractQuantityHandler = () => {
  //   console.log("sub");
  // };

  // const removeProductHandler = () => {
  //   console.log("remove");
  // };

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckOutItem key={cartItem.it} cartItem={cartItem} />
      ))}
      <span className="total">Total : $ {cartTotal}</span>
    </div>
  );
};

export default Checkout;
