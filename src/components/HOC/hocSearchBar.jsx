import { useState, useEffect } from 'react';

const hocSearchBar = (WrappedComponent) => {
  return function ComponentWithSearchBar(props) {
    const [productos, setProductos] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
      fetch('https://fakestoreapi.com/products')
        .then((response) => response.json())
        .then((data) => {
          setProductos(data);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          console.log("finalizo la promesa");
        });
    }, []);

    const toSearch = (productsList) => {
      return productsList.filter((product) =>
        product['title'].toLowerCase().includes(search)
      );
    };

    const changeInput = (e) => {
      setSearch(e.target.value.toLowerCase());
    };

    return (
      productos && (
        <div>
          <input
            type="text"
            placeholder="Buscar..."
            onChange={changeInput}
            value={search}
          />
          <WrappedComponent productos={toSearch(productos)} {...props} />
        </div>
      )
    );
  };
};

export default hocSearchBar;
