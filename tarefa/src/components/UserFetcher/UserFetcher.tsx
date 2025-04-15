import React, { useState } from "react";
import axios from "axios";
import styles from "./styles/UserFetcher.module.css";

const UserFetcher: React.FC = () => {
  const [userId, setUserId] = useState("");
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);
  const [erro, setErro] = useState("");

  const buscarUsuario = async () => {
    if (!userId) {
      setErro("Digite um ID válido.");
      setUser(null);
      return;
    }

    try {
      const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
      setUser({ name: data.name, email: data.email });
      setErro("");
    } catch {
      setErro("Usuário não encontrado.");
      setUser(null);
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Buscar Usuário</h2>

      <div className={styles.inputGroup}>
        <input
          type="number"
          placeholder="Digite o ID do usuário"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          className={styles.input}
        />
        <button onClick={buscarUsuario} className={styles.button}>
          Buscar
        </button>
      </div>

      {erro && <p className={styles.error}>{erro}</p>}

      {user && (
        <div className={styles.result}>
          <p><strong>Nome:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </div>
      )}
    </div>
  );
};

export default UserFetcher;
