import { CheckCircle2 } from "lucide-react";
import {
  Cards,
  Container,
  Content,
  GridContent,
  ItemList,
  LeftContent,
  RightContent,
  ContentItem,
  Card,
} from "./styles";

export function Diferenciais() {
  return (
    <Container id="diferenciais">
      <Content>
        <h1>Diferenciais</h1>
        <GridContent>
          <LeftContent>
            <ItemList>
              <CheckCircle2 size={35} color="#144B54" />
              <ContentItem>
                <h2>
                  Certificado da Anvisa (Agência Nacional de Vigilância
                  Sanitária)
                </h2>
              </ContentItem>
            </ItemList>
            <ItemList>
              <CheckCircle2 size={35} color="#144B54" />
              <ContentItem>
                <h2>SIF (Serviço de Inspeção Federal (SIF)</h2>
              </ContentItem>
            </ItemList>
            <ItemList>
              <CheckCircle2 size={35} color="#144B54" />
              <ContentItem>
                <h2>Mapa (Ministério da Agricultura e Pecuária)</h2>
              </ContentItem>
            </ItemList>
            <ItemList>
              <CheckCircle2 size={35} color="#144B54" />
              <ContentItem>
                <h2>
                  OEA (Operador Econômico Autorizado) da Receita Federal do
                  Brasil
                </h2>
              </ContentItem>
            </ItemList>
            <ItemList>
              <CheckCircle2 size={35} color="#144B54" />
              <ContentItem>
                <h2>Selo Verde</h2>
              </ContentItem>
            </ItemList>
          </LeftContent>
          <RightContent></RightContent>
        </GridContent>
        <Cards>
          <Card>
            <CheckCircle2 size={40} color="#144B54" />{" "}
            <span>Alta Segurança</span>
          </Card>
          <Card>
            <CheckCircle2 size={40} color="#144B54" />{" "}
            <span>Galpões de alto padrão (AAA)</span>
          </Card>
          <Card>
            <CheckCircle2 size={40} color="#144B54" />{" "}
            <span>Amplo pátio de estacionamento</span>
          </Card>
          <Card>
            <CheckCircle2 size={40} color="#144B54" />{" "}
            <span>Localização estratégica</span>
          </Card>
          <Card>
            <CheckCircle2 size={40} color="#144B54" />{" "}
            <span>Ampla possibilidade de expansão</span>
          </Card>
          <Card>
            <CheckCircle2 size={40} color="#144B54" />{" "}
            <span>AVCB Padrão J4 (o mais restritivo)</span>
          </Card>
        </Cards>
      </Content>
    </Container>
  );
}
