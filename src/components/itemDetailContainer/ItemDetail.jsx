import React, { useContext } from 'react';
import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { CartContext } from '../../context/CartContext';

const ItemDetail = ({ item }) => {
  const { agregarProducto } = useContext(CartContext);

  const addToCart = (count) => {
    const productoCarrito = { ...item, cantidad: count };
    agregarProducto(productoCarrito);
    console.log('Adding to cart:', productoCarrito);
  };

  return (
    <div className="card">
      <img src={item.imagen} alt={item.nombre} />
      <h2>{item.nombre}</h2>
      <p>Autor: {item.autor}</p>
      <p>{item.categoria}</p>
      <p>Descripcion: {item.descripcion}</p>
      <p className="price">${item.precio}</p>
      <div className="item-count">
        <ItemCount stock={item.stock} agregarAlCarrito={addToCart} />
      </div>
    </div>
  );
};

export default ItemDetail;

