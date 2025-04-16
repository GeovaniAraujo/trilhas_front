import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import BuscarUsuario from "./pages/GetUsers";
import CriarUsuario from "./pages/CreateUsers";

function App() {
  return (
    <BrowserRouter>
      <nav style={{ display: "flex", gap: "1rem", paddingBottom: "10px" }}>
        <Link to="/">Buscar Usuário</Link>
        <Link to="/criar">Criar Usuário</Link>
      </nav>
      <Routes>
        <Route path="/" element={<BuscarUsuario />} />
        <Route path="/criar" element={<CriarUsuario />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
