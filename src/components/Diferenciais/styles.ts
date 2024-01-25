import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  padding: 80px 0;
  background-color: white;
  justify-content: center;
  background: #ececec;
`;

export const Content = styled.div`
  max-width: 1394px;
  height: fit-content;
  width: 100%;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  gap: 75px;

  @media (max-width: 1750px) {
    max-width: 965px;
    gap: 50px;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    max-width: 624px;
  }
  @media (max-width: 767px) {
    max-width: 350px;
    align-items: center;
  }
`;

export const GridContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 100px;
`;
export const LeftContent = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  align-items: flex-start;
  justify-content: flex-start;
  flex-flow: column;
  gap: 30px;
`;
export const ItemList = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  gap: 15px;

  svg {
    min-width: fit-content;
  }

  @media (max-width: 1750px) {
  }
  @media (min-width: 768px) and (max-width: 1023px) {
  }

  @media (max-width: 767px) {
    align-items: center;
  }
`;

export const ContentItem = styled.div`
  @media (max-width: 1750px) {
  }

  @media (min-width: 768px) and (max-width: 1023px) {
  }

  @media (max-width: 767px) {
    h2 {
      font-size: 18px;
    }
  }
`;

export const RightContent = styled.div`
  width: 100%;
  max-width: 567px;
  height: 564px;
  border-radius: 10px 25px;
  background: #616161;

  @media (max-width: 1750px) {
  }
  @media (min-width: 768px) and (max-width: 1023px) {
  }

  @media (max-width: 767px) {
    display: none;
  }
`;
export const Cards = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 125px;
  grid-row-gap: 50px;

  @media (max-width: 1750px) {
    grid-row-gap: 30px;
    grid-column-gap: 50px;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 30px;
    grid-column-gap: 50px;
  }

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    grid-row-gap: 30px;
    grid-column-gap: 50px;
  }
`;
export const Card = styled.div`
  display: flex;
  width: 100%;
  gap: 15px;
  height: fit-content;
  padding: 45px 25px;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px 25px;
  background: #fff;

  span {
    color: #031616;
    font-family: Inter;
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  svg {
    min-width: fit-content;
  }

  @media (max-width: 1750px) {
    padding: 35px 20px;
    span {
      font-size: 18px;
    }
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    padding: 25px 15px;
    span {
      font-size: 18px;
    }
  }

  @media (max-width: 767px) {
    padding: 25px 15px;
    span {
      font-size: 18px;
    }
  }
`;
