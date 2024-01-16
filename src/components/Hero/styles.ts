import styled from "styled-components";

// interface HeroProps {
//   background: any;
// }

export const Container = styled.section`
  background-color: #0d6663;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  width: 100%;
  height: fit-content;
  clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 150px 0;
  /* margin-top: 100px; */
  video {
    position: fixed;
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
    z-index: -1;
    filter: brightness(0.3);
  }

  @media (min-width: 768px) and (max-width: 1023px) {
  }

  @media (max-width: 767px) {
    padding: 100px 0;
  }
`;

export const Content = styled.div`
  display: flex;
  /* flex-flow: column; */
  max-width: 1394px;
  width: 100%;
  gap: 50px;
  align-items: center;
  .text {
    display: flex;
    flex-flow: column;
    gap: 50px;
    h1 {
      color: #00c2cc;
      font-size: 64px;
      font-weight: 900;
      text-transform: uppercase;
    }

    .small {
      font-size: 40px;
    }

    p {
      color: #fff;
      font-size: 20px;
      /* max-width: 50%; */
    }
  }

  .image {
  }

  button {
    width: fit-content;
    padding: 10px 25px;
    height: fit-content;
    border-radius: 10px;
    border: none;
    background: rgba(255, 255, 255, 1);
    color: rgba(0, 145, 153, 1);
    text-align: center;
    font-size: 14px;
    font-weight: 900;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:active {
      transform: scale(0.95) translateZ(0px) !important;
    }

    &:hover {
      transform: scale(1.03) translateZ(0px);
    }
  }

  @media (max-width: 1750px) {
    max-width: 965px;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    max-width: 624px;

    .image {
      display: none;
    }
  }

  @media (max-width: 767px) {
    max-width: 350px;
    .image {
      display: none;
    }

    .text {
      width: 100%;
      .smallTitle {
        font-size: 42px;
      }
    }
  }
`;
