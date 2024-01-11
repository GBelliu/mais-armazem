import { Header } from "./components/Header";
import "./App.css";
import { Hero } from "./components/Hero";
function App() {
  return (
    <main className="main">
      <Header />
      <Hero
        title={<h1>nossas soluções</h1>}
        description={
          <p>
            A Informo oferece consultoria especializada em TI, atendendo sua
            empresa com as melhores soluções do mercado, adaptadas às suas
            necessidades. 
          </p>
        }
        backgroundVideo={
          <video id="bgVideo" preload="true" autoPlay loop muted>
            <source
              src="https://res.cloudinary.com/do3nfw5nb/video/upload/v1688652483/videobackground_zylutk.mp4"
              type="video/mp4"
            />
          </video>
        }
        button={<button>saiba mais</button>}
      />
    </main>
  );
}

export default App;
