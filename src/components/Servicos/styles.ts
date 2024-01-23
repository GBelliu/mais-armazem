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
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    max-width: 100%;
  }
  @media (max-width: 767px) {
    max-width: 100%;
    align-items: center;
  }
`;

export const ContentServicos = styled.div`
  width: 80%;
  height: fit-content;
`;

export const Items = styled.div``;

interface ItemProps {
  active: boolean;
}

export const Item = styled.div<ItemProps>`
  border-bottom: ${({ active }) => (active ? "10px solid #400186" : "0px")};
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
  box-shadow: 6px 8px 24px 0px rgba(149, 157, 165, 0.2);
`;

export const Rectangle = styled.div`
  width: 30%;
  min-height: 500px;
  height: 100%;
  flex-shrink: 0;
  border-radius: 15px 0px 0px 25px;
  background: #d9d9d9;
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
`;
