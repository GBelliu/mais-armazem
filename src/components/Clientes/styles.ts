import styled from "styled-components";

export const Container = styled.div`
  color: #000;
  display: flex;
  background: #fff;
  height: fit-content;

  box-shadow: 0px 8px 24px 0px rgba(149, 157, 165, 0.2);
  width: 100vw;
  .swiper {
    width: 100%;
    /* box-sizing: border-box; */
    position: relative;
    padding: 40px 0px;
  }

  .swiper-wrapper {
    /* gap: 10px; */
    /* width: 100%; */
    /* margin-left: -80px; */
    /* display: flex; */
    /* justify-content: center; */
    transition-timing-function: linear;
  }

  .swiper-button-next,
  .swiper-button-prev {
    position: absolute;
    z-index: 10;
    width: 75px;
    height: 75px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 50%;
    transition: all 0.2s ease-in-out;
    &::after {
      font-size: 25px;
      font-weight: 600;
    }

    &:active {
      transform: scale(0.95) translateZ(0px) !important;
    }

    &:hover {
      transform: scale(1.03) translateZ(0px);
    }
  }

  .swiper-button-prev {
    display: none;
  }

  .swiper-button-next {
    display: none;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    height: fit-content;
    width: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 100px;
    }
  }
`;

export const ContentSlide = styled.div`
  display: flex;
  padding: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background: #fff;
  box-shadow: 2px 4px 12px 0px rgba(149, 157, 165, 0.2);
`;
