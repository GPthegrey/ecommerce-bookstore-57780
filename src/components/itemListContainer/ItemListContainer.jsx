import { obtenerProductos } from "../../data/data.js";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import useLoading from "../../hooks/useLoading";
import "./ItemListContainer.css"
import Loading from "../loading_screen/Loading";
import { useParams } from 'react-router-dom'

const ItemListContainer = ({ saludo }) => {
  const [productos, setProductos] = useState([]);

  const { id } = useParams();

  const { isLoading, showLoading, hideLoading } = useLoading();

  useEffect(() => {

    showLoading();
    obtenerProductos()
      .then((respuesta) => {
        if (id) {
          respuesta = respuesta.filter((producto) => producto.categoria === id);
        }
        setProductos(respuesta);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        console.log("finalizo la promesa");
        hideLoading();
      });
  }, [id]);

  return (
    <div className="itemlistcontainer">
      <p>{saludo}</p>
      {isLoading ? < Loading /> : <ItemList productos = {productos} />}
    </div>
  );
};
export default ItemListContainer;
