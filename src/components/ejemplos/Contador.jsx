import React from 'react';

const Contador = ({ contador, aumentar, disminuir }) => {
  return (
    <div>
      <button onClick={disminuir}> - </button>
      <p>contador: {contador}</p>
      <button onClick={aumentar}> + </button>
    </div>
  );
};

export default Contador;
