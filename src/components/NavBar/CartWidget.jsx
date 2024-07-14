import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

import { BsBagDash } from "react-icons/bs";

const CartWidget = () => {

  const { cantidadTotal } = useContext(CartContext)

  let cantidad = cantidadTotal()

  return (
    <Link to="/carrito" className="cartwidget">
      <BsBagDash size={35} />
      <p>{ cantidad > 0 && cantidad }</p>
    </Link>
  )
}
export default CartWidget
