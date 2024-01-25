import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  padding: 30px 0;
  background-color: white;
  justify-content: center;
`;

export const Content = styled.div`
  max-width: 1394px;
  height: fit-content;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0;
  justify-content: center;
  align-items: center;
  gap: 75px;

  @media (max-width: 1750px) {
    max-width: 965px;
    gap: 50px;
    h1 {
      font-size: 36px;
    }
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    gap: 35px;
    max-width: 100%;
    h1 {
      font-size: 32px;
    }
  }
  @media (max-width: 767px) {
    gap: 25px;
    max-width: 100%;
    align-items: center;
    h1 {
      text-align: center;
    }
  }
`;

export const ContentServicos = styled.div`
  width: 80%;
  height: fit-content;
`;

export const Items = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  button {
    border: none;
    background: transparent;
    cursor: pointer;
  }
`;

interface ItemProps {
  active: boolean;
}

export const Item = styled.div<ItemProps>`
  border-bottom: ${({ active }) => (active ? "6px solid #0D6663" : "0px")};
  color: #041c1b;
  text-align: center;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  @media (max-width: 1750px) {
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 18px;
    border-bottom: ${({ active }) => (active ? "4px solid #0D6663" : "0px")};
  }

  @media (max-width: 767px) {
    font-size: 16px;
    border-bottom: ${({ active }) => (active ? "4px solid #0D6663" : "0px")};
  }
`;

export const BoxArea = styled.div`
  width: 100%;
  display: flex;
  height: fit-content;
  padding: 25px;
  justify-content: space-between;
  align-items: center;
  gap: 50px;
  flex-shrink: 0;
  border-radius: 10px 25px;
  background: #fbfbfb;
  box-shadow: 6px 8px 24px 0px rgba(149, 157, 165, 0.3);
`;

export const Rectangle = styled.div`
  width: 30%;
  min-height: 500px;
  height: 100%;
  flex-shrink: 0;
  border-radius: 15px 0px 0px 25px;
  background: #d9d9d9;

  @media (max-width: 767px) {
    display: none;
  }
`;

export const TextBox = styled.div`
  display: flex;
  flex-flow: column;
  gap: 20px;
  h2 {
    color: #031616;
    font-family: Inter;
    font-size: 36px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  p {
    font-size: 20px;
  }

  @media (max-width: 1750px) {
    h2 {
      font-size: 28px;
    }
    p {
      font-size: 18px;
    }
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    h2 {
      font-size: 24px;
    }
    p {
      font-size: 16px;
    }
  }

  @media (max-width: 767px) {
    h2 {
      font-size: 24px;
    }
    p {
      font-size: 16px;
    }
  }
`;
