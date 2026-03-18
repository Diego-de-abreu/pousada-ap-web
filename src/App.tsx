import "./App.css";
import Filtro from "./components/filtro/filtro";
import { useNavigate, useLocation } from "react-router-dom";
import Acomodacoes from "./pages/Acomodacoes.tsx";

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="page">
      <header className="topbar">
        <div className="brand">ReservaFácil</div>
        <nav className="menu">
          <button className="menu-item active" onClick={() => navigate("/acomodacoes")}>
            🏠 Acomodações
          </button>
          <button className="menu-item" onClick={() => navigate("/experiencias")}>
            🎈 Experiências
          </button>
          <button className="menu-item" onClick={() => navigate("/servicos")}>
            🛎️ Serviços
          </button>
        </nav>
        <div className="actions">Torne-se um anfitrião</div>
      </header>

      <Filtro />

      {location.pathname === "/acomodacoes" && <Acomodacoes />}
    </div>
  );
}