import { Button } from "../elements/Button";
import { slide as Menu } from "react-burger-menu";
import { Container, Content, MenuItem, MenuItems } from "./styles";
import { Link } from "react-scroll";
import { useState } from "react";
export function Header() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  return (
    <Container>
      <Content>
        <a href="/">
          <img src="./logo.png" alt="" />
        </a>
        <MenuItems>
          <a href="/">
            <MenuItem>Home</MenuItem>
          </a>
          <Link to="sobre" href="/" smooth={true} duration={1000} offset={-100}>
            <MenuItem>Sobre</MenuItem>
          </Link>
          <Link
            to="servicos"
            href="/"
            smooth={true}
            duration={1000}
            offset={-100}
          >
            <MenuItem>Servicos</MenuItem>
          </Link>
          <Link
            to="diferenciais"
            href="/"
            smooth={true}
            duration={1000}
            offset={0}
          >
            <MenuItem>Diferenciais</MenuItem>
          </Link>
          <a href="/midia">
            <MenuItem>Mídia</MenuItem>
          </a>

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
        <Link to="contato" href="/" smooth={true} duration={1000} offset={-100}>
          <Button visible={false} text={"Fale conosco"} />
        </Link>
        <Menu
          right
          className="menuBox"
          isOpen={isOpenMenu}
          onOpen={() => setIsOpenMenu(true)}
          onClose={() => setIsOpenMenu(false)}
        >
          <Link to="form" href="/" smooth={true} duration={500} offset={-100}>
            Home
          </Link>
          <Link to="form" href="/" smooth={true} duration={500} offset={-100}>
            Sobre
          </Link>
          <Link to="form" href="/" smooth={true} duration={500} offset={-100}>
            Produtos
          </Link>
          <Link to="form" href="/" smooth={true} duration={500} offset={-100}>
            Contato
          </Link>
        </Menu>
      </Content>
    </Container>
  );
}
