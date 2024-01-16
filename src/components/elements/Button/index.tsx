import { ReactNode } from "react";

import { Container } from "./styles";

interface ButtonProps {
  text: String;
  icon?: ReactNode;
}

export function Button({ text, icon }: ButtonProps) {
  return (
    <Container>
      <span>{text}</span>
      {icon}
    </Container>
  );
}
