"use client";
import { ReactNode } from "react";
import { Container, Content } from "./styles";
import {
  Link
} from "react-scroll";
interface HeroProps {
  title: ReactNode;
  description: ReactNode;
  button: ReactNode;
  backgroundVideo?: ReactNode;
  image?: ReactNode;
  background?: any;
  anchor?: any;
}

export function Hero({
  title,
  description,
  button,
  backgroundVideo,
  image,
  background,
  anchor,
}: HeroProps) {
  return (
    <Container background={background}>
      {backgroundVideo}

      <Content>
        <div className="text">
          {title}
          {description}
          <Link
            to={anchor || "contato"}
            spy={true}
            hashSpy={true}
            smooth={true}
            duration={500}
          >
            {button}
          </Link>
        </div>
        <div className="image">{image}</div>
      </Content>
    </Container>
  );
}
