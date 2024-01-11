import { ReactNode } from 'react';

import { Container } from './styles';

interface ContatoProps {
  children: ReactNode;
}

export function Contato({ children }: ContatoProps) {
  return (
    <Container>
      <h1>Contato</h1>
      {children}
    </Container>
  );
}
