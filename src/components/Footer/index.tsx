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
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
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
        <h3>
          Desenvolvido por{" "}
          <a href="https://grupomngt.com.br/" target="_blank">
            Grupo MNGT (colocar a logo)
          </a>
          .
        </h3>
      </Desenvolvido>
    </Container>
  );
}
