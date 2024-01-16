import { Header } from "./components/Header";
import "./App.css";
import { Hero } from "./components/Hero";

import { Sobre } from "./components/Sobre";
import { Servicos } from "./components/Servicos";
function App() {
  return (
    <main className="main">
      <Header />
      <Hero />
      <Sobre />
      <Servicos />
    </main>
  );
}

export default App;
