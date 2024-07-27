import React from 'react';
import './OrderDetails.css';

const OrderDetails = ({ orderDetails }) => {
  return (
    <div className="checkout-container">
      <h2>Thank you for your purchase!</h2>
      <div className="order-brief">
        <h3>Order Details</h3>
        <p><strong>Name:</strong> {orderDetails.name}</p>
        <p><strong>Address:</strong> {orderDetails.address}</p>
        <p><strong>Payment:</strong> {orderDetails.payment}</p>
        <div className="checkout-summary">
          {orderDetails.items.map((item) => (
            <div key={item.id}>
              <span>{item.nombre} x {item.cantidad}</span>
              <span>${item.precio * item.cantidad}</span>
            </div>
          ))}
          <div className="total">
            <span>Total</span>
            <span>${orderDetails.total}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
