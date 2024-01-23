import { Container, Content, TextContent, VideoContent } from "./styles";
import { Button } from "../elements/Button";
import { ChevronRight } from "lucide-react";

export function Sobre() {
  return (
    <Container>
      <Content>
        <TextContent>
          <h1>A Mais Armazém</h1>
          <p>
            A <b>Mais Armazém</b> é uma empresa de armazenagem geral para
            estocagem de mercadorias de terceiros com planta de 240.000 m²,
            consorciada ao Centro Logístico Rio Claro (CLRC) situado no
            município de Rio Claro (SP), numa região estratégica do Estado de
            São Paulo próxima aos grandes centros de produção e rotas de
            distribuição de mercadorias.
          </p>
          <p>
            Nosso negócio, devidamente registrado na Jucesp, associa logística
            eficiente, gestão de estoque, armazenamento seguro e soluções de
            armazenagem dentro de uma estrutura física de alta qualidade, segura
            e planejada para potencializar as atividades de armazenagem. As
            áreas comuns têm apurado trabalho de paisagismo e os acessos são
            monitorados 24 horas por dia. A unidade utiliza energia fotovoltaica
            dentro das propostas de energia limpa e renovável adotada pelo Grupo
            MNGT.
          </p>
          <Button
            text={"FALE AGORA COM UM DE NOSSOS ATENDENTES"}
            icon={<ChevronRight color="#FFFFFF" />}
          />
        </TextContent>
        <VideoContent></VideoContent>
      </Content>
    </Container>
  );
}
