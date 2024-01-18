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
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    max-width: 624px;
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
  gap: 55px;
  max-width: 50%;
  width: 100%;
`;

export const VideoContent = styled.div`
  width: 100%;
  max-width: 567px;
  height: 564px;
  border-radius: 10px 25px;
  background: #616161;
`;
