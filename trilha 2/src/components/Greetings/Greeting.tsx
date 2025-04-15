import React, { useState } from "react";

type SaudacaoProps = {
  nomeInicial: string;
};

const Saudacao: React.FC<SaudacaoProps> = ({ nomeInicial }) => {
  const [nome, setNome] = useState(nomeInicial);

  return (
    <div>
      <h2>Olá, {nome}!</h2>
      <input
        type="text"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        placeholder="Digite um novo nome"
      />
    </div>
  );
};

export default Saudacao;
