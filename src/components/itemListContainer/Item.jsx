import { Link } from "react-router-dom";

const Item = ({ producto }) => {
  return (
    <Link to={'/libros/' + producto.id} className="item">
      <img src={producto.imagen} width={200} alt="foto libro" />
      <p><strong>{producto.nombre}</strong></p>
      <p><strong>{producto.autor}</strong></p>
      <p>{producto.categoria}</p>
      <p>precio: ${producto.precio}</p>
    </Link>
  );
};
export default Item;
