import { useState } from "react"

const ItemCount = ({ agregarAlCarrito, stock }) => {
  const [contador, setContador] = useState(1)

  const sumarContador = () => {
    if(contador < stock){
      setContador( contador + 1 )
    }
  }

  const restarContador = () => {
    if(contador > 1 ){
      setContador( contador - 1 )
    }
  }

  return (
    <div>
      <button onClick={restarContador}>-</button>
      <p>{contador}</p>
      <button onClick={sumarContador} >+</button>

      <button onClick={ () => agregarAlCarrito(contador) } >Agregar al carrito</button>
    </div>
  )
}
export default ItemCount
