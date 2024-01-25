import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: relative;
  background-color: #fff;
  padding-top: 80px;
  padding-bottom: 80px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1394px;
  gap: 50px;

  @media (max-width: 1750px) {
    max-width: 965px;
    h1 {
      font-size: 36px;
    }
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    max-width: 624px;
    flex-flow: column;
    h1 {
      font-size: 32px;
    }
  }

  @media (max-width: 767px) {
    max-width: 350px;

    h1 {
      text-align: center;
    }
  }
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
  max-width: 50%;
  width: 100%;

  p {
    font-size: 20px;
  }

  @media (max-width: 1750px) {
    gap: 30px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    gap: 20px;
    max-width: 100%;
    align-items: center;
  }

  @media (max-width: 767px) {
    gap: 15px;
  }
`;

export const VideoContent = styled.div`
  width: 100%;
  max-width: 567px;
  height: 564px;
  border-radius: 10px 25px;
  background: #616161;
`;
