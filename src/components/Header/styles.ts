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
  justify-content: space-between;
  align-items: center;
  padding: 0;

  img {
    width: 100px;
  }

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

export const MenuItems = styled.div`
  display: flex;
  gap: 50px;
`;
export const MenuItem = styled.div``;
export const ButtonHeader = styled.button`
  width: fit-content;
  padding: 10px 25px;
  height: fit-content;
  border-radius: 7px;
  border: 1px solid #0d6663;
  background: rgba(255, 255, 255, 1);
  color: #0d6663;
  text-align: center;
  font-size: 14px;
  font-weight: 900;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  font-family: Inter;

  &:active {
    transform: scale(0.95) translateZ(0px) !important;
    background: #0d6663;
    color: #fff;
  }

  &:hover {
    transform: scale(1.03) translateZ(0px);
    background: #0d6663;
    color: #fff;
  }
`;
