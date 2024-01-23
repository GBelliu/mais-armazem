import styled from "styled-components";

export const Container = styled.div`
  color: #000;
  display: flex;

  width: 100vw;
  .swiper {
    width: 100%;
    /* box-sizing: border-box; */
    position: relative;
  }

  .swiper-wrapper {
    /* gap: 10px; */
    /* width: 100%; */
    /* margin-left: -80px; */
    /* display: flex; */
    /* justify-content: center; */
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
