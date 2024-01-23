import { Button } from "../elements/Button";
import { Container, Content, TextContent, VideoContent } from "./styles";

interface RecursoProps {
  title: string;
  paragraph: string;
}

export function Recurso({ title, paragraph }: RecursoProps) {
  return (
    <Container>
      <Content>
        <VideoContent></VideoContent>
        <TextContent>
          <h1>{title}</h1>
          <p>{paragraph}</p>
          <Button text={"SAIBA MAIS"} />
        </TextContent>
      </Content>
    </Container>
  );
}
