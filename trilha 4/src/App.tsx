import React from "react";
import UserFetcher from "./components/UserFetcher/UserFetcher";
import NovoUsuario from "./components/NovoUsuario/NovoUsuario";

const App: React.FC = () => {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Usuários</h1>

      <section style={{ marginBottom: "40px" }}>
        <h2>Buscar Usuário</h2>
        <UserFetcher />
      </section>

      <section>
        <h2>Criar Novo Usuário</h2>
        <NovoUsuario />
      </section>
    </div>
  );
};

export default App;
