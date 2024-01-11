import { ReactNode } from 'react';

import { Container } from './styles';

interface SobreProps {
  children: ReactNode;
}

export function Sobre({ children }: SobreProps) {
  return (
    <Container>
      <h1>Sobre</h1>
      {children}
    </Container>
  );
}
