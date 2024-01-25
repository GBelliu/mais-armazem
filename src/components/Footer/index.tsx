import {
  Container,
  Content,
  Desenvolvido,
  Item,
  Left,
  Logo,
  Right,
} from "./styles";

export function Footer() {
  return (
    <Container>
      <Content>
        <Left>
          <Logo>
            <img src="./logobranca.png" alt="" />
            <p>
              A Mais Armazém é uma empresa de armazenagem geral para estocagem
              de mercadorias de terceiros com planta de 240.000 m², consorciada
              ao Centro Logístico Rio Claro (CLRC) situado no município de Rio
              Claro (SP), numa região estratégica do Estado de São Paulo próxima
              aos grandes centros de produção e rotas de distribuição de
              mercadorias.
            </p>
          </Logo>
        </Left>

        <Right>
          <Item>
            <h2>Home</h2>
            <h2>Sobre</h2>
            <h2>Serviços</h2>
            <h2>Diferenciais</h2>
            <h2>Notícias</h2>
            <h2>Contato</h2>
          </Item>
        </Right>
      </Content>
      <Desenvolvido>
        <h3>Desenvolvido por </h3>
        <a href="https://grupomngt.com.br/" target="_blank">
          <img
            src="https://static.wixstatic.com/media/c34986_ef9c3d76a86147d394728f3cba27d4d8~mv2.png/v1/fill/w_660,h_193,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/GrupoMNGT_-_Logo_Oficial_-_Branco-removebg-preview.png"
            alt="Logo - Grupo MNGT"
          />
        </a>
      </Desenvolvido>
    </Container>
  );
}
