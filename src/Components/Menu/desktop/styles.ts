import styled from "styled-components";
import menuSelected from "../../../assets/images-desktop/menu-selected-bg.svg";

export const AsideContainer = styled.div`
  height: 100vh;
  width: 318px;
  min-height: 660px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 500;
  display: flex;
  flex-flow: column nowrap;
  background: var(--green-gradient);
  font-family: var(--poppins);
  font-style: normal;
  align-items: center;
  padding: 70px 0 0 0;
`;

export const MenuWrapper = styled.nav`
  width: 100%;
  height: inherit;
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 0;
  transition: 1s;

  a {
    height: 95px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 8px 0 8px 50px;
    position: relative;
    z-index: 450;
    margin-right: 0px;
    transition: ease-in-out 1s;

    span {
      font-size: 24px;
      color: var(--font-color);
      font-weight: 600;
      display: flex;
      align-items: center;
    }

    svg {
      margin-right: 20px;
      path {
        fill: white;
      }
    }

    &.selected {
      background: url(${menuSelected});
      background-position: center;
      background-repeat: no-repeat;
      background-clip: border-box;
      background-size: cover;
      height: 174px;
      transition: 1s;
      span {
        color: var(--green400);
      }

      svg {
        fill: var(--green400);
        path {
          fill: var(--green400);
        }
      }
    }
  }
`;

export const ButtonLogoffOrEnter = styled.button`
  width: 318px;
  height: 113px;
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: var(--green300);
  font-family: var(--poppins);
  font-size: 28px;
  color: var(--font-color);
  outline: none;
  border: none;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  svg {
    margin-left: 15px;
  }
  &:hover {
    filter: brightness(0.9);
  }
`;
