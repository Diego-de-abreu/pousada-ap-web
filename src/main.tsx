import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "./index.css";
import App from "./App.tsx";
import Acomodacoes from "./pages/Acomodacoes.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/acomodacoes" element={<Acomodacoes />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);