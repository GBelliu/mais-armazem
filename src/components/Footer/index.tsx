import {
  Center,
  Circle,
  Container,
  Content,
  Desenvolvido,
  Item,
  Left,
  Logo,
  Right,
  Social,
} from "./styles";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { BiLogoLinkedin } from "react-icons/bi";

export function Footer() {
  return (
    <Container>
      <Content>
        <Left>
          <Logo>
            <img
              src="https://res.cloudinary.com/do3nfw5nb/image/upload/v1688652479/logo_lnomum.png"
              alt=""
            />
            <p>Somos especialistas em tecnologia.</p>
          </Logo>
          <Social>
            <a
              href="https://www.facebook.com/informo.tecnologia/"
              target="_blank"
            >
              <Circle>
                <FaFacebookF color="#000" />
              </Circle>
            </a>
            <a
              href="https://www.instagram.com/informo.tecnologia/"
              target="_blank"
            >
              <Circle>
                <BsInstagram color="#000" />
              </Circle>
            </a>

            {/* <Circle>
              <AiFillYoutube color="#000" />
            </Circle> */}
            <a
              href="https://www.linkedin.com/company/informo-tecnologia/"
              target="_blank"
            >
              <Circle>
                <BiLogoLinkedin color="#000" />
              </Circle>
            </a>
          </Social>
        </Left>
        <Center>
          <Item>
            <a href="/">Home</a>
            <a href="/backup">Backup</a>
            <a href="/servicos">Serviços</a>
            <a href="/infraestrutura">Infraestrutura</a>
            <a href="/seguranca">Segurança</a>
            <a href="/institucional">Institucional</a>
            <a href="https://informo.com.br/landingpage/" target="_blank">
              SonicWall
            </a>
            <a href="/blog">Blog</a>
            <a href="/privacidade">Privacidade</a>
            <a href="/politica-de-privacidade">Política de Privacidade</a>
            <a href="/termo-de-uso">Termo de Uso</a>
          </Item>
        </Center>
        <Right>
          <h2>LOCALIZAÇÃO</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.459320515048!2d-49.04869428833446!3d-22.33627907957585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bf676486fc1ca7%3A0x45ea745252347e1!2sINFORMO%20TECNOLOGIA!5e0!3m2!1spt-BR!2sbr!4v1687539206728!5m2!1spt-BR!2sbr"
            width="320"
            height="215"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Right>
      </Content>
      <Desenvolvido>
        <h3>
          Desenvolvido por{" "}
          <a href="https://rosadv.com.br/" target="_blank">
            RosaDV®
          </a>
          .
        </h3>
      </Desenvolvido>
    </Container>
  );
}
