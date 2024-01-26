import { ReactNode, useState } from "react";

import { Container } from "./styles";

interface ButtonProps {
  text: String | ReactNode;
  icon?: ReactNode;
  type?: any;
  visible?: boolean;
}

export function Button({ text, icon, type, visible = true }: ButtonProps) {
  return (
    <Container type={type} visible={visible}>
      <span>{text}</span>
      {icon}
    </Container>
  );
}
