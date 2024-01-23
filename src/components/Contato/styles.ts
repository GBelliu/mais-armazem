import styled from "styled-components";

export const Container = styled.section`
  display: block;
  max-width: 1394px;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  margin-bottom: 6.25rem;
  margin-top: 6.25rem;

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

export const ContentFormulario = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  justify-content: center;
  align-items: center;
  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Forms = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  width: 100%;
  margin-top: 30px;

  @media (max-width: 900px) {
    align-items: center;
    margin-bottom: 50px;
  }

  input {
    width: 400px !important;
    height: 30px;
    border: none;
    border-bottom: 2px solid #144a52;
    font-size: 25px;

    @media (max-width: 1200px) {
      width: 300px !important;
    }

    @media (max-width: 900px) {
      font-size: 22px;
    }

    @media (max-width: 500px) {
      font-size: 18px;
    }

    &:focus {
      outline: none;
    }

    &::placeholder {
      font-weight: 500;
      font-size: 25px;
      line-height: 30px;
      opacity: 0.8;

      color: #000000;

      @media (max-width: 900px) {
        font-size: 22px;
      }

      @media (max-width: 500px) {
        font-size: 18px;
      }
    }
  }

  .formItem {
    margin: 45px 0;
  }
`;

export const Informacoes = styled.div`
  width: 100%;
  max-width: 520px;
  height: 707px;
  padding: 70px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  background: #062d2c;
  border-radius: 15px 25px;
  flex-direction: column;

  @media (max-width: 1510px) {
    width: 100%;

    position: static;
  }

  @media (max-width: 900px) {
    width: 100%;
    margin: 0 auto;
    max-width: 350px;
    padding: 40px;
  }
  .infoText {
    display: flex;
    flex-direction: column;
    text-align: start;

    h2 {
      font-weight: 600;
      font-size: 24px;
      line-height: 29px;
      color: #ffffff;
      margin-bottom: 30px;
    }

    div {
      margin-bottom: 20px;
      h3 {
        font-weight: 600;
        font-size: 20px;
        line-height: 24px;
        color: #f2f2f2;
      }

      span {
        font-weight: 300;
        font-size: 20px;
        line-height: 24px;
        color: #f2f2f2;
      }
    }
  }
  .infoMap {
    width: 100%;
    display: flex;
    margin: auto;

    iframe {
      height: 250px;
      width: 100%;
    }
  }
`;
