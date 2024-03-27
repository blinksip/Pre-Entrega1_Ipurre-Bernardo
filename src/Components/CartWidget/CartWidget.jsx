import React from "react";
import './CartWidget.css'
const CartWidget = () => {
  return (
    <div className="container_cart">
      <button className="cart">
        <i className="bi bi-cart2"></i>0
      </button>
    </div>
  );
};

export default CartWidget;
