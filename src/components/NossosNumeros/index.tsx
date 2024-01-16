import { AreaContent, Container, Content, Divider, Item } from "./styles";

export function NossosNumeros() {
  return (
    <Container>
      <AreaContent>
        <h1>Nossos números</h1>
        <Content>
          <Item>
            <h2>400%</h2>
            <p>Titulo</p>
          </Item>
          <Divider />
          <Item>
            <h2>100%</h2>
            <p>Titulo</p>
          </Item>
          <Divider />
          <Item>
            <h2>+500</h2>
            <p>Titulo</p>
          </Item>
          <Divider />
          <Item>
            <h2>+200</h2>
            <p>Titulo</p>
          </Item>
        </Content>
      </AreaContent>
    </Container>
  );
}
