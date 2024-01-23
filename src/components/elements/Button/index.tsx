import { ReactNode } from "react";

import { Container } from "./styles";

interface ButtonProps {
  text: String | ReactNode;
  icon?: ReactNode;
  type?: any;
}

export function Button({ text, icon, type }: ButtonProps) {
  return (
    <Container type={type}>
      <span>{text}</span>
      {icon}
    </Container>
  );
}
