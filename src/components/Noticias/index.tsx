import { ReactNode, useEffect } from "react";

import { Container, Content, TextContent } from "./styles";
import { useAllPrismicDocumentsByType } from "@prismicio/react";

export function Noticias() {
  const [documents] = useAllPrismicDocumentsByType("noticia");
  useEffect(() => {
    console.log(documents);
  }, [documents]);
  return (
    <Container>
      {documents?.map((document) => (
        <Content key={document.data.title}>
          <TextContent>
            <h1>{document.data.title[0].text}</h1>
            <p>{document.data.description[0].text}</p>
          </TextContent>
          <span>{document.data.date}</span>
          <img src={document.data.image.url} alt={document.data.image.alt} />
        </Content>
      ))}
    </Container>
  );
}
