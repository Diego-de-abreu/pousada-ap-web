import "./App.css";
import Filtro from "./components/filtro/filtro";
import { useNavigate, useLocation } from "react-router-dom";
import Acomodacoes from "./pages/Acomodacoes.tsx";
import Header from "./pages/header/Header";
export default function App() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="page">

      <Header />
      <Filtro />

      {location.pathname === "/acomodacoes" && <Acomodacoes />}
    </div>
  );
}