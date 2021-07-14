import styled from "styled-components";

export const Container = styled.section`
  position: fixed;
  z-index: 999;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
`;
export const Modal = styled.section`
  width: 80vw;
  position: absolute;
  z-index: 1000;
  background: #fff;
  height: 270px;
  border-radius: 15px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  .close {
    color: var(--green400);
    width: 25px;
    height: 25px;
    position: absolute;
    top: 10px;
    right: 15px;
    transition: transform 0.3s;
    &:hover {
      cursor: pointer;
    }
    &:active {
      transition: transform 0.3s;
      transform: scale(0.95);
    }
  }
  > .information {
    position: absolute;
    bottom: 10px;
    right: 15px;
    display: flex;
    flex-direction: column;

    span {
      align-self: flex-end;
      font-size: 22px;
      color: var(--gray600);
      font-family: var(--poppins);
      font-weight: 700;
    }
  }
`;
