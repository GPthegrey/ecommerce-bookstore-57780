import React, { useState } from 'react';
import Contador from './Contador';

const ContadorLogica = ({ stock }) => {
  const [contador, setContador] = useState(0);

  const aumentar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const disminuir = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };

  return (
    <div>
      <Contador
        contador={contador}
        aumentar={aumentar}
        disminuir={disminuir}
      />
    </div>
  );
};

export default ContadorLogica;
