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

  a {
    text-decoration: none;
  }

  @media (max-width: 1750px) {
    max-width: 965px;
    gap: 50px;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    max-width: 624px;
  }
  @media (max-width: 767px) {
    max-width: 350px;
  }

  .bm-burger-button {
    position: sticky;
    width: 36px;
    height: 30px;
    margin-top: auto;
    margin-bottom: auto;
    display: none;
    z-index: 990 !important;
    @media (max-width: 1023px) {
      display: flex;
    }
  }

  /* Color/shape of burger icon bars */
  .bm-burger-bars {
    background: #000;
  }

  /* Color/shape of burger icon bars on hover*/
  .bm-burger-bars-hover {
    background: #000 !important;
  }

  /* Position and sizing of clickable cross button */
  .bm-cross-button {
    height: 24px;
    width: 24px;
  }

  /* Color/shape of close button cross */
  .bm-cross {
    background: #fff;
  }

  /*
Sidebar wrapper styles
Note: Beware of modifying this element as it can break the animations - you should not need to touch it in most cases
*/
  .bm-menu-wrap {
    position: fixed;
    height: 100%;
    top: 0;
    right: 0;
  }

  /* General sidebar styles */
  .bm-menu {
    background: #000;
    padding: 2.5em 1.5em 0;
    font-size: 1.15em;
  }

  /* Morph shape necessary with bubble or elastic */
  .bm-morph-shape {
    fill: #373a47;
  }

  /* Wrapper for item list */
  .bm-item-list {
    color: #fff;
    padding: 0.8em;
  }

  /* Individual item */
  .bm-item {
    display: inline-block;

    color: #fff;
    margin-bottom: 10px;
    text-align: left;
    text-decoration: none;
    transition: color 0.2s;
  }

  .bm-item:hover {
    color: #d1d1d1;
  }

  /* Styling of overlay */
  .bm-overlay {
    background: rgba(0, 0, 0, 0.3);
    right: 0;
    top: 0;
  }
`;

export const MenuItems = styled.div`
  display: flex;
  gap: 50px;
  @media (max-width: 1023px) {
    display: none;
  }
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
