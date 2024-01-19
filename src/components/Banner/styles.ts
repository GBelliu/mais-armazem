import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 400px;
  max-height: 400px;
  color: #fff;
  text-align: center;
  font-family: Inter;
  font-size: 60px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

export const Imagem = styled.div`
  background-image: url("./backgroundbanner.png");
  width: 100%;
  height: 100%;
  -webkit-filter: blur(5px);
  -moz-filter: blur(5px);
  -o-filter: blur(5px);
  -ms-filter: blur(5px);
  filter: blur(5px);
  position: absolute;
`;

export const Content = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
