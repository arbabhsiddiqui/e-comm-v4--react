import { useContext } from "react";
import CheckOutItem from "../../components/checkout-item/checkout-item.component";
import { CartContext } from "../../contexts/cart.context";
import {
  CheckoutContainer,
  CheckoutHeader,
  Total,
  HeaderBlock,
} from "./checkout.styles.jsx";

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
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.map((cartItem) => (
        <CheckOutItem key={cartItem.it} cartItem={cartItem} />
      ))}
      <Total>Total : $ {cartTotal}</Total>
    </CheckoutContainer>
  );
};

export default Checkout;
