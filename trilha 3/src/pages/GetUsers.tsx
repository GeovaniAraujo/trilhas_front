import { useState } from "react";
import axios from "axios";

const BuscarUsuario = () => {
  const [id, setId] = useState("");
  const [usuario, setUsuario] = useState<{
    name: string;
    email: string;
  } | null>(null);
  const [erro, setErro] = useState("");

  const buscarUsuario = async () => {
    try {
      setErro("");
      setUsuario(null);
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      setUsuario(res.data);
    } catch {
      setErro("Usuário não encontrado.");
    }
  };

  return (
    <div>
      <h1>Buscar Usuário por ID</h1>
      <input
        type="number"
        value={id}
        onChange={(e) => setId(e.target.value)}
        placeholder="Digite o ID"
      />
      <button onClick={buscarUsuario}>Buscar</button>

      {usuario && (
        <div>
          <p>
            <strong>Nome:</strong> {usuario.name}
          </p>
          <p>
            <strong>Email:</strong> {usuario.email}
          </p>
        </div>
      )}

      {erro && <p style={{ color: "red" }}>{erro}</p>}
    </div>
  );
};

export default BuscarUsuario;
