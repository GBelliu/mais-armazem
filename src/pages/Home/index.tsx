import React from "react";
import { Header } from "../../components/Header";
import { Banner } from "../../components/Banner";
import { Clientes } from "../../components/Clientes";
import Contato from "../../components/Contato";
import { Diferenciais } from "../../components/Diferenciais";
import { Footer } from "../../components/Footer";
import { Hero } from "../../components/Hero";
import { Recurso } from "../../components/Recurso";
import { Servicos } from "../../components/Servicos";
import { Sobre } from "../../components/Sobre";

export const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Clientes />
      <Sobre />
      <Recurso
        title="Soluções Integradas"
        paragraph="Na Mais Armazém, sua empresa terá um cardápio de prestação de serviços aglutinados de alta qualidade, que atende todos os aspectos do negócio (security, manutenção, segurança no trabalho e outros apoios, que podem ser solicitados mediante demanda do parceiro comercial).  
Outro ponto positivo é nosso banco de empresas prestadoras de serviços, que são empresas parceiras que atuam na área de logística em atividades pontuais de montagem de kits, fracionamento de produtos e movimentação de carga/descarga e armazenagem
"
      />
      <Servicos />
      <Recurso
        title="Localização"
        paragraph="Temos a localização perfeita para empresas das regiões Sul, Sudeste e do Estado de São Paulo, além de grandes centros industriais, como São Paulo, Rio de Janeiro, Curitiba, Belo Horizonte e, respectivas regiões metropolitanas, redistribuírem sua produção para outras áreas do país, da América do Sul e do mundo.
Estamos em ponto privilegiado do Estado de São Paulo, próximo ao Aeroporto Internacional de Cargas e Viracopos e às rodovias Bandeirantes, Anhanguera, Washington Luís e Rodovia Fausto Santomauro. 

Endereço: Avenida Cabo Basílio Zechim Junior, 344 - Jardim Novo II - Rio Claro-SP
CEP: 13502-546
"
      />
      <Diferenciais />
      <Banner />
      <Contato />
      <Footer />
    </>
  );
};
