import React from 'react'
import './ItemDetail.css';


const ItemDetail = ( {item} ) => {
  return (
    <div>
      <div className='card'>
        <h2>{item.nombre}</h2>
        <p>Autor: {item.autor}</p>
        <p>{item.categoria}</p>
        <img src={item.imagen} alt={item.title} />
        <p>Descripcion: {item.descripcion}</p>
        <p>${item.precio}</p>
      </div>
    </div>
  )
}

export default ItemDetail
