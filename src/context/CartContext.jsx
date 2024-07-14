import { createContext, useState } from "react";

//Creamos un contexto de React llamado CartContext
const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const agregarProducto = (producto) => {
    const condicion = estaEnElCarrito(producto.id);

    if (condicion) {
      //sumar la cantidad nueva
      const productosModificados = carrito.map((productoCarrito) => {
        if (productoCarrito.id === producto.id) {
          return { ...productoCarrito, cantidad: productoCarrito.cantidad + producto.cantidad };
        } else {
          return productoCarrito;
        }
      });

      setCarrito(productosModificados);
    } else {
      //agregar como producto nuevo
      setCarrito([...carrito, producto]);
    }
  };

  const estaEnElCarrito = (idProducto) => {
    const condicion = carrito.some((producto) => producto.id === idProducto);
    return condicion;
  };

  const cantidadTotal = () => {
    const cantidad = carrito.reduce((total, producto) => total + producto.cantidad, 0);
    return cantidad;
  };

  const precioTotal = () => {
    const precio = carrito.reduce( (total, producto) => total + (producto.cantidad * producto.precio), 0)
    return precio
  }

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  const borrarProductoPorId = (idProducto) => {
    const productosFiltrados = carrito.filter(
      (productoCarrito) => productoCarrito.id !== idProducto
    );
    setCarrito(productosFiltrados);
  };

  return (
    <CartContext.Provider
      value={{ carrito, agregarProducto, cantidadTotal, vaciarCarrito, borrarProductoPorId, precioTotal }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
