import { useState } from "react";
import axios from "axios";

const CriarUsuario = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  const cadastrar = async () => {
    setMensagem("");

    // Validação básica de e-mail
    if (!nome.trim() || !email.includes("@")) {
      setMensagem("Insira um nome e um e-mail válidos utilizando '@'.");
      return;
    }

    try {
      const res = await axios.post(
        "https://jsonplaceholder.typicode.com/users",
        {
          name: nome,
          email: email,
        }
      );

      if (res.status === 201) {
        setMensagem("Usuário cadastrado.");
      } else {
        setMensagem("Erro ao cadastrar.");
      }
    } catch {
      setMensagem("Erro ao cadastrar.");
    }
  };

  return (
    <div>
      <h1>Criar Novo Usuário</h1>
      <input
        type="text"
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <input
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={cadastrar}>Cadastrar</button>

      {mensagem && <p>{mensagem}</p>}
    </div>
  );
};

export default CriarUsuario;
