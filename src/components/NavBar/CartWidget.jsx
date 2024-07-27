import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import { BsBagDash } from 'react-icons/bs';
import './CartWidget.css';

const CartWidget = () => {
  const { cantidadTotal } = useContext(CartContext);
  let cantidad = cantidadTotal();

  return (
    <Link to="/carrito" className="cartwidget">
      <BsBagDash size={35} className="icon" />
      {cantidad > 0 && <p>{cantidad}</p>}
    </Link>
  );
};

export default CartWidget;
