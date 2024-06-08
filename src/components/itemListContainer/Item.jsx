const Item = ({ producto }) => {
  return (
    <div className="item">
      <img src={producto.imagen} width={200} alt="foto libro" />
      <p>{producto.nombre}</p>
      <p>{producto.descripcion}</p>
      <p>{producto.categoria}</p>
      <p>precio: ${producto.precio}</p>
    </div>
  );
};
export default Item;
