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
      title: "Fuja da bitributação",
      description:
        "Ao desenharem nosso modelo de negócio, nossos estrategistas financeiros e tributários definiram o melhor modelo, que equilibra custos e benefícios para as empresas que optarem pela Mais Armazém, o que protege sua operação da bitributação de impostos e/ou necessidade de implantar filiais, que encarecem seus custos e reduzem sua margem de lucro. Com nosso apoio, sua empresa terá mais espaço na unidade fabril ou comercial para ampliar sua capacidade produtiva e de negócios. As mercadorias podem sair da Mais Armazém diretamente para os clientes finais, reduzindo custos de logística para o cliente.",
      button_url: "Saiba mais",
      img_url:
        "https://res.cloudinary.com/dh8jsqkcp/image/upload/v1684853880/imgservices_lbsos2.png",
    },
    {
      title: "Nossos números",
      description:
        "Nossa planta ampla reúne uma enorme capacidade de armazenamento, galpões em diferentes tamanhos e grande capacidade de estocagem. Área total: 240.000 m² Área construída: 83.000 m² Área de novos projetos: 30.000 m² (já aprovados) Built-to-suit (construção sob medida): 80.000 m²",
      button_url: "",
      img_url:
        "https://res.cloudinary.com/dh8jsqkcp/image/upload/v1684853879/drawback_mauzi3.jpg",
    },
    {
      title: "Olhos no futuro do planeta",
      description:
        "A Mais Armazém e o CLRC geram e utilizam energia limpa e renovável de matriz fotovoltaica, ou seja, captam e transformam energia solar em energia elétrica para atender todas suas demandas internas, gerando um impacto positivo na qualidade de vida do planeta.  Essa sustentável voltada para a qualidade de vida e proteção do planeta é parte integrante do planejamento estratégico do negócio e está alinhada aos ODS (Objetivos de Desenvolvimento Sustentável) definidos pela ONU (Organização das Nações Unidas) para garantir as gerações futuras. ",
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

  const [serviceInformations, setServiceInformations] = useState<any>();

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
        <h1>Temos o menor custo do mercado!</h1>
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
              <Item active={actives["btn1"]}>{serviceContent[0]?.title}</Item>
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
              <Item active={actives["btn2"]}>{serviceContent[1]?.title}</Item>
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
              <Item active={actives["btn3"]}>{serviceContent[2]?.title}</Item>
            </button>
          </Items>
          <BoxArea>
            <Rectangle />
            <TextBox>
              <h2>{serviceInformations?.title}</h2>
              <p>{serviceInformations?.description}</p>
              <Button text={"SAIBA MAIS"} />
            </TextBox>
          </BoxArea>
        </ContentServicos>
      </Content>
    </Container>
  );
}
