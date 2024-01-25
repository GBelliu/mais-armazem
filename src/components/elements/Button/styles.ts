import styled from "styled-components";

interface ButtonProps {
  visible?: boolean;
}

export const Container = styled.button<ButtonProps>`
  display: flex;
  padding: 15px 30px;
  justify-content: center;
  align-items: center;
  height: fit-content;
  gap: 15px;
  border-radius: 5px 10px;
  background: #144b54;
  box-shadow: 2px 4px 12px 0px rgba(149, 157, 165, 0.2);
  cursor: pointer;
  width: fit-content;
  border: none;
  span {
    color: #eaf8fa;
    text-align: center;
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    white-space: nowrap;
  }

  @media (max-width: 1023px) {
    display: ${({ visible }) => (visible ? "flex" : "none")};
  }
`;
