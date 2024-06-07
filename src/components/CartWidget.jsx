import React from 'react'
import { TiShoppingCart } from "react-icons/ti";


const CartWidget = () => {
  return (
    <div className='cartWidget'>
      <TiShoppingCart className='cart'/>
      <p>1</p>
    </div>
  )
}

export default CartWidget
