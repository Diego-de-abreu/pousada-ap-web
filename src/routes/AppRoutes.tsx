import { Routes, Route } from "react-router-dom";
import Acomodacoes from "../pages/Acomodacoes.tsx";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/acomodacoes" element={<Acomodacoes />} />
    </Routes>
  );
}