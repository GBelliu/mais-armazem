import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: relative;
  background-color: #fff;
  /* .ellipse {
    position: absolute;
    right: 0;
    top: -100%;
    z-index: -1;

    @media (min-width: 768px) and (max-width: 1023px) {
      width: 400px;
      top: -35%;
    }

    @media (max-width: 767px) {
      display: none;
    }
  } */
`;

export const AreaContent = styled.div`
  display: flex;
  max-width: 1394px;
  flex-flow: column;
  gap: 50px;
  padding: 80px 0;

  h1 {
    color: #006166;
    font-size: 48px;
    font-weight: 900;
    text-transform: uppercase;
    text-align: center;
  }

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

export const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;
  text-align: center;
  @media (max-width: 767px) {
    max-width: 350px;
    flex-wrap: wrap;
    gap: 25px;
  }
`;

export const Item = styled.div`
  flex: 1 1 auto;
  h2 {
    text-align: center;
    font-size: 62px;
    font-weight: 900;
    background-image: linear-gradient(
      -90deg,
      rgba(0, 0, 0, 0.75),
      rgb(13, 102, 99, 1)
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
  }

  p {
    color: #006166;
    text-align: center;
    font-size: 24px;
    font-weight: 500;
    max-width: 190px;
  }

  @media (max-width: 1023px) {
    max-width: 150px;

    h2 {
      font-size: 48px;
    }

    p {
      font-size: 20px;
    }
  }
`;

export const Divider = styled.div`
  height: 35.305px;
  width: 2px;
  background: rgba(0, 97, 102, 1);
  align-self: center;
  margin: 0 30px;
  border-radius: 50px;
  @media (max-width: 1023px) {
    display: none;
  }
`;
