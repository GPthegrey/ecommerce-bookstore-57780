import React, { useState, useEffect } from 'react';
import { obtenerProductos } from '../../data/data';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const { idLibro } = useParams();

  useEffect(() => {
    obtenerProductos()
      .then((data) => {
        console.log(idLibro)
        const itemFiltered = data.find((item) => item.id == idLibro);
        setItem(itemFiltered);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, [idLibro]);

  if (!item) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <ItemDetail item={item} />
    </div>
  );
};

export default ItemDetailContainer;
