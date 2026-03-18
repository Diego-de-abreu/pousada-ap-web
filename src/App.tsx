import "./App.css";
export default function App() {
  return (
    <div className="page">
      <header className="topbar">
        <div className="brand">StayNow</div>
        <nav className="menu">
          <button className="menu-item active">🏠 Acomodações</button>
          <button className="menu-item">🎈 Experiências</button>
          <button className="menu-item">🛎️ Serviços</button>
        </nav>
        <div className="actions">Torne-se um anfitrião</div>
      </header>

      <section className="search-wrap">
        <div className="search">
          <div><strong>Onde</strong><p>Buscar destinos</p></div>
          <div><strong>Quando</strong><p>Insira as datas</p></div>
          <div><strong>Quem</strong><p>Hóspedes?</p></div>
          <button className="btn-search">🔍</button>
        </div>
      </section>
    </div>
  );
}