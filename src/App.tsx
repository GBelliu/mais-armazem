import { Header } from "./components/Header";
import "./App.css";
import { Hero } from "./components/Hero";
import { NossosNumeros } from "./components/NossosNumeros";
import { Sobre } from "./components/Sobre";
import { Servicos } from "./components/Servicos";
function App() {
  return (
    <main className="main">
      <Header />
      <Hero />
      <Sobre />
      <Servicos />
      {/* <NossosNumeros /> */}
    </main>
  );
}

export default App;
