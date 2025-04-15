import React, { useState } from "react";

type ContadorProps = {
  valorInicial: number;
};

const Contador: React.FC<ContadorProps> = ({ valorInicial }) => {
  const [contador, setContador] = useState(valorInicial);

  return (
    <div>
      <h2>Contador: {contador}</h2>
      <button onClick={() => setContador(contador - 1)}>-</button>
      <button onClick={() => setContador(contador + 1)}>+</button>
    </div>
  );
};

export default Contador;
