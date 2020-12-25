import React from "react";
import CustomButton from "../custom-button/custom-buttom.component";
import "./cart-dropdown.styles.scss";

const CartDropdown = () => (
  <div className="cart-dropdown">
    <div className="cart-items"></div>
    <CustomButton>Go TO CHECKOUT</CustomButton>
  </div>
);

export default CartDropdown;