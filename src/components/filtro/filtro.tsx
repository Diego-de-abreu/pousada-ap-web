export default function Filtro() {
  return (
    <section className="search-wrap">
      <div className="search-box">

        {/* Destino */}
        <input
          type="text"
          placeholder="Para onde você vai?"
          className="input"
        />

        {/* Datas */}
        <div className="dates">
          <input type="date" />
          <span>até</span>
          <input type="date" />
        </div>

        {/* Pessoas */}
        <select className="input">
          <option>1 adulto</option>
          <option>2 adultos</option>
          <option>3 adultos</option>
        </select>

        {/* Botão */}
        <button className="btn">
          🔍 Pesquisar
        </button>

      </div>
    </section>
  );
}