import {
  BoxArea,
  Container,
  Content,
  ContentServicos,
  Items,
  Rectangle,
  TextBox,
} from "./styles";
import { Button } from "../elements/Button";

// interface ServicosProps {
//   children?: ReactNode;
// }

export function Servicos() {
  return (
    <Container>
      <Content>
        <h1>Nossos serviços</h1>
        <ContentServicos>
          <Items></Items>
          <BoxArea>
            <Rectangle />
            <TextBox>
              <h2>Lorem Ipsum</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
              <Button text={"SAIBA MAIS"} />
            </TextBox>
          </BoxArea>
        </ContentServicos>
      </Content>
    </Container>
  );
}
