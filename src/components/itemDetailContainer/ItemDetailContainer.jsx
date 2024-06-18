import React from 'react'
import { useState, useEffect } from 'react'
import { obtenerProductos } from '../../data/data'

const [item, setItem] = useState({})

useEffect(() => {
  obtenerProductos()
  .then((data) => {
    const itemFiltered = data.find((item) => item.id === 1)
  })
}, [])

const ItemDetailContainer = () => {
  return (
    <div>
      <h2>itemFiltered.nombre</h2>
    </div>
  )
}

export default ItemDetailContainer
