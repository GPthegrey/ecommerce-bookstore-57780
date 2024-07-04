import React, { useState } from 'react';

const ContadorEventListener = () => {
  const [contador, setContador] = useState(0);

  const handleSumar = () => {
    setContador(prevContador => prevContador + 1);
  };

  const handleRestar = () => {
    setContador(prevContador => prevContador - 1);
  };

  return (
    <div>
      <button onClick={handleRestar}>-</button>
      <p>valor: {contador}</p>
      <button onClick={handleSumar}>+</button>
    </div>
  );
};

export default ContadorEventListener;
