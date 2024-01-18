import { Header } from "./components/Header";
import "./App.css";
import { Hero } from "./components/Hero";

import { Sobre } from "./components/Sobre";
import { Servicos } from "./components/Servicos";
import { Clientes } from "./components/Clientes";
import { Footer } from "./components/Footer";
import { Recurso } from "./components/Recurso";

function App() {
  return (
    <main className="main">
      <Header />
      <Hero />
      <Clientes />
      <Sobre />
      <Servicos />
      <Recurso />
      <Footer />
    </main>
  );
}

export default App;
