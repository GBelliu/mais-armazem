import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: relative;
  padding-top: 80px;
  padding-bottom: 80px;
  gap: 50px;

  @media (max-width: 1750px) {
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    padding-top: 40px;
    padding-bottom: 40px;
    gap: 30px;
  }

  @media (max-width: 767px) {
    padding-top: 40px;
    padding-bottom: 40px;
    gap: 30px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;
  max-width: 1394px;
  gap: 20px;

  img {
    width: 100%;
  }

  @media (max-width: 1750px) {
    max-width: 965px;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    max-width: 624px;
  }

  @media (max-width: 767px) {
    max-width: 350px;
  }
`;

export const TextContent = styled.div`
  display: flex;
  align-items: center;
  flex-flow: column;
  gap: 15px;
`;
