import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import './Carrito.css';

const Carrito = () => {
  const { carrito, borrarProductoPorId, vaciarCarrito, precioTotal } = useContext(CartContext);

  if (carrito.length === 0) {
    return (
      <div className="carrito-container">
        <h2>No hay libros en el carrito 😥</h2>
        <Link to="/" className="carrito-actions">Ver libros</Link>
      </div>
    );
  }

  return (
    <div className="carrito-container">
      {carrito.map((productoCarrito) => (
        <div className="carrito-item" key={productoCarrito.id}>
          <img src={productoCarrito.imagen} alt={productoCarrito.nombre} />
          <div className="carrito-item-details">
            <p><strong>{productoCarrito.nombre}</strong></p>
            <p>Precio c/u: ${productoCarrito.precio}</p>
            <p>Cantidad: {productoCarrito.cantidad}</p>
            <p>Total parcial: ${productoCarrito.precio * productoCarrito.cantidad}</p>
          </div>
          <div className="carrito-item-actions">
            <button onClick={() => borrarProductoPorId(productoCarrito.id)}>Eliminar</button>
          </div>
        </div>
      ))}
      <div className="carrito-summary">
        <span>Total:</span>
        <span>${precioTotal()}</span>
      </div>
      <div className="carrito-actions">
        <button onClick={vaciarCarrito}>Vaciar carrito</button>
        <Link to="/checkout">Continuar con la compra</Link>
      </div>
    </div>
  );
};

export default Carrito;
