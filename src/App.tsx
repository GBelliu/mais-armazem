import { Header } from "./components/Header";
import "./App.css";
import { Hero } from "./components/Hero";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { Sobre } from "./components/Sobre";
import { Servicos } from "./components/Servicos";
import { Clientes } from "./components/Clientes";
import { Footer } from "./components/Footer";
import { Recurso } from "./components/Recurso";
import { Diferenciais } from "./components/Diferenciais";
import { Banner } from "./components/Banner";
import Contato from "./components/Contato";
import { Home, Midia } from "./pages";

function App() {
  return (
    <main className="main">
      <Routes>
        <Route index element={<Home />} />

        <Route path="/midia" element={<Midia />} />
      </Routes>
    </main>
  );
}

export default App;
