import { ReactNode } from 'react';

import { Container } from './styles';

interface DiferenciaisProps {
  children: ReactNode;
}

export function Diferenciais({ children }: DiferenciaisProps) {
  return (
    <Container>
      <h1>Diferenciais</h1>
      {children}
    </Container>
  );
}
