import React from "react";
import Contador from "./components/Counter/Counter";
import Saudacao from "./components/Greetings/Greeting";
import ListaTarefas from "./components/ToDoList/ToDoList";
import ToggleVisibilidade from "./components/ToggleVisibility/ToggleVisibility";

const App: React.FC = () => {
  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
      <h1>Exercícios React</h1>

      <section style={{ marginBottom: "30px" }}>
        <h2>1. Contador Simples</h2>
        <Contador valorInicial={0} />
      </section>

      <section style={{ marginBottom: "30px" }}>
        <h2>2. Saudação Personalizada</h2>
        <Saudacao nomeInicial="Visitante" />
      </section>

      <section style={{ marginBottom: "30px" }}>
        <h2>3. Lista de Tarefas</h2>
        <ListaTarefas tarefasIniciais={["Estudar React", "Tomar café"]} />
      </section>

      <section>
        <h2>4. Controle de Visibilidade</h2>
        <ToggleVisibilidade texto="Este é um conteúdo secreto 👀" />
      </section>
    </div>
  );
};

export default App;
