import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  return (
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
  );
}
  