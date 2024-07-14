import { CartContext } from "../../context/CartContext"
import { useContext } from "react"
import { Link } from "react-router-dom"

const Carrito = () => {

  const { carrito, borrarProductoPorId, vaciarCarrito, precioTotal } = useContext(CartContext)

  //Early Return, Return temprano

  if(carrito.length === 0){
    return(
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h2>No hay libros en el carrito 😥</h2>
        <Link to="/" >Ver libros</Link>
      </div>
    )
  }

  return (
    <div>
      {
        carrito.map( (productoCarrito) => (
          <div style={{ display: "flex", justifyContent: "space-around", margin: "50px 0" }} key={productoCarrito.id}>
            <img src={productoCarrito.imagen} width={100} alt="" />
            <p>{productoCarrito.nombre}</p>
            <p>precio c/u: ${productoCarrito.precio}</p>
            <p>cantidad: {productoCarrito.cantidad}</p>
            <p>total parcial: {productoCarrito.precio * productoCarrito.cantidad}</p>

            <button onClick={ () => borrarProductoPorId(productoCarrito.id) } >Eliminar</button>
          </div>
        ))
      }
      <p>Precio Total: {precioTotal()}</p>
      <button onClick={vaciarCarrito} >Vaciar carrito</button>
      <Link to="/checkout" >Continuar con la compra</Link>
    </div>
  )
}
export default Carrito
