import React, { useState } from "react";
import axios from "axios";

const NovoUsuario: React.FC = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [tipoMensagem, setTipoMensagem] = useState<"sucesso" | "erro" | "">("");

  const cadastrarUsuario = async () => {
    if (!nome || !email) {
      setMensagem("Preencha todos os campos.");
      setTipoMensagem("erro");
      return;
    }

    try {
      const response = await axios.post("https://jsonplaceholder.typicode.com/users", {
        name: nome,
        email: email,
      });

      console.log("Usuário criado:", response.data);
      setMensagem("Usuário cadastrado com sucesso!");
      setTipoMensagem("sucesso");
      setNome("");
      setEmail("");
    } catch (error) {
      console.error("Erro ao cadastrar:", error);
      setMensagem("Erro ao cadastrar usuário.");
      setTipoMensagem("erro");
    }
  };

  return (
    <div style={{ maxWidth: "300px", margin: "0 auto" }}>
      <h2>Criar Usuário</h2>

      <input
        type="text"
        placeholder="Digite seu nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        style={{ padding: "8px", marginBottom: "8px" }}
      />

      <input
        type="email"
        placeholder="Digite seu e-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ padding: "8px", marginBottom: "8px" }}
      />

      <button
        onClick={cadastrarUsuario}
        style={{
          padding: "8px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          cursor: "pointer",
        }}
      >
        Enviar
      </button>

      {mensagem && (
        <p style={{ color: tipoMensagem === "sucesso" ? "green" : "red", marginTop: "10px" }}>
          {mensagem}
        </p>
      )}
    </div>
  );
};

export default NovoUsuario;
