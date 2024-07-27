import React, { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import CheckoutForm from './CheckoutForm';
import OrderDetails from './OrderDetails';
import './Checkout.css';

const Checkout = () => {
  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    payment: ''
  });
  const [orderSubmitted, setOrderSubmitted] = useState(false);
  const [orderDetails, setOrderDetails] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const order = {
      ...formData,
      items: carrito,
      total: precioTotal()
    };
    console.log('Order submitted', order);
    setOrderDetails(order);
    setOrderSubmitted(true);
    vaciarCarrito();
    alert('Thank you for your purchase!');
  };

  return (
    orderSubmitted ? (
      <OrderDetails orderDetails={orderDetails} />
    ) : (
      <CheckoutForm
        formData={formData}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        carrito={carrito}
        precioTotal={precioTotal}
      />
    )
  );
};

export default Checkout;
