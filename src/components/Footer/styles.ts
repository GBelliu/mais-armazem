import styled from "styled-components";

export const Container = styled.div`
  background: #00181a;
  width: 100%;
  height: fit-content;
  /* clip-path: polygon(0 0, 100% 10%, 100% 100%, 0 100%); */
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  padding: 125px 0 40px 0;
  gap: 100px;
  @media (max-width: 767px) {
    padding: 80px 0 20px 0;
    gap: 60px;
  }
`;

export const Desenvolvido = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff !important;
  h3 {
    font-size: 20px;
    color: #fff;
    a {
      font-size: 22px;
      cursor: pointer;
      color: #fff;
    }
  }
`;

export const Content = styled.div`
  max-width: 964px;
  display: flex;
  gap: 50px;
  width: 100%;

  @media (min-width: 768px) and (max-width: 1023px) {
    max-width: 624px;
    display: flex;
    flex-flow: column;
  }

  @media (max-width: 767px) {
    max-width: 350px;
    display: flex;
    flex-flow: column;
  }
`;
export const Left = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  gap: 120px;
`;
export const Logo = styled.div`
  display: flex;
  flex-flow: column;
  gap: 15px;
  img {
    width: 100%;
    max-width: 315px;
  }

  p {
    color: #fff;
    font-size: 20px;
    width: 100%;
  }
`;
export const Social = styled.div`
  display: flex;
  gap: 5px;
`;

export const Circle = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const Center = styled.div`
  display: flex;
  width: fit-content;
  margin-right: 100px;
`;
export const Item = styled.div`
  display: flex;
  flex-flow: column;
  color: #fff;
  font-size: 20px;
  gap: 20px;
`;
export const Right = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
  gap: 20px;

  h2 {
    color: #fff;
  }

  iframe {
    width: 100%;
  }
`;
