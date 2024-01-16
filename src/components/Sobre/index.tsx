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
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.
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
