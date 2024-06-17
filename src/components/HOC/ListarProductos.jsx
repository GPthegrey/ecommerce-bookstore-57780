import React from 'react'
import hocSearchBar from './hocSearchBar'

const ListarProductos = ({ productos }) => {
  return (
    <div>
      {
        productos.map((producto) => (
          <div key={producto.id}>
            <h3>{producto.title}</h3>
            <p>{producto.description}</p>
            <p>{producto.price}</p>
          </div>
        ))
      }
    </div>
  )
}

const ListarProductosConBuscador = hocSearchBar(ListarProductos)

export default ListarProductosConBuscador
