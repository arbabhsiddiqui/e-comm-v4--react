import Button from "../button/button.component";

import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown-container">
      <p className="empty-message">No Item Found</p>
      <div className="cart-items"></div>
      <Button>CheckOut</Button>
    </div>
  );
};

export default CartDropdown;
