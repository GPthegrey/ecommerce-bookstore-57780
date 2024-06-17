import { obtenerProductos } from "../../data/data.js";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import useLoading from "../../hooks/useLoading";
import "./ItemListContainer.css"
import Loading from "../loading_screen/Loading";

const ItemListContainer = ({ saludo }) => {
  const [productos, setProductos] = useState([]);

  const { isLoading, showLoading, hideLoading } = useLoading();

  useEffect(() => {

    showLoading();
    obtenerProductos()
      .then((respuesta) => {
        setProductos(respuesta);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        console.log("finalizo la promesa");
        hideLoading();
      });
  }, []);

  return (
    <div className="itemlistcontainer">
      <p>{saludo}</p>
      {isLoading ? < Loading /> : <ItemList productos = {productos} />}
    </div>
  );
};
export default ItemListContainer;
