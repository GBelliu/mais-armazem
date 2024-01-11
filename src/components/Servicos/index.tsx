import { ReactNode } from 'react';

import { Container } from './styles';

interface ServicosProps {
  children: ReactNode;
}

export function Servicos({ children }: ServicosProps) {
  return (
    <Container>
      <h1>Servicos</h1>
      {children}
    </Container>
  );
}
