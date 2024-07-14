import { useState } from 'react';

const ItemCounter = ({ addToCart }) => {
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <button onClick={decrement}>-</button>
      <p>{count}</p>
      <button onClick={increment}>+</button>
      <button onClick={() => addToCart(count)}>Agregar al carrito</button>
    </div>
  );
};

export default ItemCounter;
