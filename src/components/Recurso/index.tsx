import { Button } from "../elements/Button";
import { Container, Content, TextContent, VideoContent } from "./styles";

export function Recurso() {
  return (
    <Container>
      <Content>
        <VideoContent></VideoContent>
        <TextContent>
          <h1>A Mais Armazém</h1>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.
          </p>
          <Button text={"SAIBA MAIS"} />
        </TextContent>
      </Content>
    </Container>
  );
}
