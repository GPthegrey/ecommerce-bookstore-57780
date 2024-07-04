import { Link } from "react-router-dom";
import { useState } from 'react';

const Item = ({ producto }) => {
  const [expandir, setExpandir] = useState(false);

  const handleExpandir = () => {
    setExpandir(true);
  }

  const handleContraer = () => {
    setExpandir(false);
  }

  return (
    <Link
      to={'/libros/' + producto.id}
      className={`item ${expandir ? "expandir" : "contraer"}`}
      onMouseEnter={handleExpandir}
      onMouseLeave={handleContraer}
    >
      <img src={producto.imagen} width={200} alt="foto libro" />
      <p><strong>{producto.nombre}</strong></p>
      <p><strong>{producto.autor}</strong></p>
      <p>{producto.categoria}</p>
      <p>precio: ${producto.precio}</p>
    </Link>
  );
};

export default Item;
