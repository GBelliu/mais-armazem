import { Button } from "../elements/Button";
import { slide as Menu } from "react-burger-menu";
import { Container, Content, MenuItem, MenuItems } from "./styles";
import { Link } from "react-scroll";
export function Header() {
  return (
    <Container>
      <Content>
        <img src="./logo.png" alt="" />
        <MenuItems>
          <MenuItem>Home</MenuItem>
          <MenuItem>Sobre</MenuItem>
          <MenuItem>Servicos</MenuItem>
          <MenuItem>Diferenciais</MenuItem>
          <MenuItem>MA na Mídia</MenuItem>
          <Link
            to="contato"
            href="/"
            smooth={true}
            duration={1000}
            offset={-100}
          >
            <MenuItem>Contato</MenuItem>
          </Link>
        </MenuItems>
        <Button text={"Fale conosco"} />
      </Content>
    </Container>
  );
}
