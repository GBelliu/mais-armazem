import {
  BoxArea,
  Container,
  Content,
  ContentServicos,
  Item,
  Items,
  Rectangle,
  TextBox,
} from "./styles";
import { Button } from "../elements/Button";
import { useEffect, useState } from "react";

export function Servicos() {
  const serviceContent: any = [
    {
      title: "Exportação e Importação",
      description:
        "Temos a expertise que você precisa para que sua carga chegue em segurança. Temos conhecimento e know-how sobre as legislações e exclusividades de cada país ou região.",
      button_url: "Saiba mais",
      img_url:
        "https://res.cloudinary.com/dh8jsqkcp/image/upload/v1684853880/imgservices_lbsos2.png",
    },
    {
      title: "Auxílio em Drawback",
      description:
        "O Drawback permite a suspensão ou eliminação de tributos incidentes na aquisição de insumos empregados na industrialização de produtos exportáveis tornando-os mais competitivos no cenário internacional.",
      button_url: "",
      img_url:
        "https://res.cloudinary.com/dh8jsqkcp/image/upload/v1684853879/drawback_mauzi3.jpg",
    },
    {
      title: "Exclusive EUA",
      description:
        "Agilidade e otimização de preços para frete interno. Mesmo que não haja residência no local você terá o melhor custo-benefício do mercado. Garantimos todo trâmite necessário.",
      button_url: "",
      img_url:
        "https://res.cloudinary.com/dh8jsqkcp/image/upload/v1684853880/frete_zzbxoy.jpg",
    },
  ];
  const [actives, setActives] = useState({
    btn1: true,
    btn2: false,
    btn3: false,
  });

  const [serviceInformations, setServiceInformations] = useState();

  useEffect(() => {
    if (actives.btn1 === true) {
      setServiceInformations(serviceContent[0]);
    }
    if (actives.btn2 === true) {
      setServiceInformations(serviceContent[1]);
    }
    if (actives.btn3 === true) {
      setServiceInformations(serviceContent[2]);
    }
  }, [actives]);
  return (
    <Container>
      <Content>
        <h1>Nossos serviços</h1>
        <ContentServicos>
          <Items>
            <button
              onClick={() =>
                setActives({
                  btn1: true,
                  btn2: false,
                  btn3: false,
                })
              }
            >
              <Item active={actives["btn1"]}>Importação e exportação</Item>
            </button>
            <button
              onClick={() =>
                setActives({
                  btn1: false,
                  btn2: true,
                  btn3: false,
                })
              }
            >
              <Item active={actives["btn2"]}>Drawback</Item>
            </button>
            <button
              onClick={() =>
                setActives({
                  btn1: false,
                  btn2: false,
                  btn3: true,
                })
              }
            >
              <Item active={actives["btn3"]}>Frete EUA</Item>
            </button>
          </Items>
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
