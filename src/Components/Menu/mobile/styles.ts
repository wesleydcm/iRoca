import styled from "styled-components";

export const MenuContainer = styled.div`
  width: 100%;
  height: fit-content;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 500;
  display: flex;
  flex-flow: row nowrap;
  background: var(--green-gradient);
  font-family: var(--poppins);
  font-style: normal;
  align-items: center;
  padding: 16px 0;
  justify-content: center;
`;

export const MenuWrapper = styled.nav`
  width: 100%;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  display: flex;
  gap: 1rem;
  flex-flow: row nowrap;
  position: relative;
  margin: 0;
  transition: 1s;

  a {
    height: 69px;
    max-width: 120px;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    padding: 8px;
    position: relative;
    z-index: 450;
    margin-right: 0px;
    transition: ease-in-out 1s;
    &:hover {
      filter: brightness(0.9);
    }

    span {
      font-size: 014px;
      color: var(--green600);
      font-weight: 600;
      display: flex;
      align-items: center;
      word-wrap: wrap none;
    }

    svg {
      width: 100%;
      margin-bottom: 5px;
      path {
        fill: var(--green600);
      }
    }

    &.selected {
      transition: 1s;
      list-style: none;
      transform: scale(1.1);
      span {
        color: var(--font-color);
      }

      svg {
        path {
          fill: white;
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
`;
