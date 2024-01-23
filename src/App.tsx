import { Header } from "./components/Header";
import "./App.css";
import { Hero } from "./components/Hero";

import { Sobre } from "./components/Sobre";
import { Servicos } from "./components/Servicos";
import { Clientes } from "./components/Clientes";
import { Footer } from "./components/Footer";
import { Recurso } from "./components/Recurso";
import { Diferenciais } from "./components/Diferenciais";
import { Banner } from "./components/Banner";
import Contato from "./components/Contato";

function App() {
  return (
    <main className="main">
      <Header />
      <Hero />
      <Clientes />
      <Sobre />
      <Servicos />
      <Recurso />
      <Diferenciais />
      <Banner />
      <Contato />
      <Footer />
    </main>
  );
}

export default App;
