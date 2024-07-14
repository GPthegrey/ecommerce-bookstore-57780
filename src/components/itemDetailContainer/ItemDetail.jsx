import React from 'react';
import './ItemDetail.css';
import ItemCounter from '../ItemCount/ItemCounter';

const ItemDetail = ({ item }) => {
  const addToCart = (count) => {
    const productoCarrito = {
      item: item,
      cantidad: count,
    };

    // You can now handle adding the item to the cart here
    console.log('Adding to cart:', productoCarrito);
  };

  return (
    <div>
      <div className="card">
        <h2>{item.nombre}</h2>
        <p>Autor: {item.autor}</p>
        <p>{item.categoria}</p>
        <img src={item.imagen} alt={item.nombre} />
        <p>Descripcion: {item.descripcion}</p>
        <p>${item.precio}</p>
        <ItemCounter addToCart={addToCart} />
      </div>
    </div>
  );
};

export default ItemDetail;

