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
  > div.total {
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

  .price {
    position: absolute;
    left: 15px;
    top: 10px;
    color: var(--green400);
    font-weight: 600;
    font-family: var(--poppins);
    span {
      margin-left: 0.5rem;
      color: var(--gray600);
    }
  }
`;

export const InputPlusMinus = styled.div`
  border: 1px solid var(--green400);
  font-family: var(--poppins);
  border-radius: 7px;
  width: 65%;
  height: 50px;
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  button {
    display: block;
    padding: 0 1rem;
    border: none;
    color: var(--green400);
    font-weight: 800;
    font-size: 1.4rem;
    height: 50px;
    background: none;
  }
  button:nth-child(1) {
    border-top-left-radius: 7px;
    border-bottom-left-radius: 7px;
  }
  button:nth-child(3) {
    border-top-right-radius: 7px;
    border-bottom-right-radius: 7px;
  }
`;
