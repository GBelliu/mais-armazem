import { Button } from "../elements/Button";
import { Container, Content, MenuItem, MenuItems } from "./styles";

export function Header() {
  return (
    <Container>
      <Content>
        <img src="./logo.png" alt="" />
        <MenuItems>
          <MenuItem>Home</MenuItem>
          <MenuItem>Sobre</MenuItem>
          <MenuItem>Nossos números</MenuItem>
          <MenuItem>Servicos</MenuItem>
          <MenuItem>Diferenciais</MenuItem>
          <MenuItem>Contato</MenuItem>
        </MenuItems>
        <Button text={"Fale conosco"} />
      </Content>
    </Container>
  );
}
