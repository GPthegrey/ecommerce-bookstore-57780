import React from 'react';
import './CheckoutForm.css';

const CheckoutForm = ({ formData, handleInputChange, handleSubmit, carrito, precioTotal }) => {
  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <form className="checkout-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
        <textarea
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="payment"
          placeholder="Payment Details"
          value={formData.payment}
          onChange={handleInputChange}
          required
        />
        <div className="checkout-summary">
          <h3>Order Summary</h3>
          {carrito.map((item) => (
            <div key={item.id}>
              <span>{item.nombre} x {item.cantidad}</span>
              <span>${item.precio * item.cantidad}</span>
            </div>
          ))}
          <div className="total">
            <span>Total</span>
            <span>${precioTotal()}</span>
          </div>
        </div>
        <button type="submit" className="checkout-button">Place Order</button>
      </form>
    </div>
  );
};

export default CheckoutForm;
