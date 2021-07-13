import styled from "styled-components";

export const BlurBackground = styled.div`

  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;

  opacity: 0.9;
  z-index: 2200;
  section {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2300;
    opacity: 1 !important;
    background-color:  #ffffff;
    button,input {
      &:focus {
    outline: -webkit-focus-ring-color auto 0px !important; 
  }
      }
    }
  }
`;

export const CloseButton = styled.button`
  width: 27px;
  height: 27px;
  background-color: var(--green400);
  color: #ffffff;
  border-radius: 50%;
  border: 0px;
  font-family: var(--poppins);
  font-size: 1.2rem;
  font-weight: 600;
`;

export const SkipButton = styled.button`
  background-color: #ffffff;
  border: none;
  color: var(--green400);
  font-weight: 600;
  font-size: 14px;
  &:focus {
    border: 2px solid green !important;
  }
`;

export const Container = styled.div`
  width: 361px;
  height: 323px;
  background-color: #ffffff;

  position: relative;
  box-shadow: 0 2px 5px 2px var(--shadow-black);
  margin-inline: auto;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  overflow: hidden;
  padding: 30px;

  input {
    width: 306px;
    height: 97px;
    border: 3px solid var(--green400);
    border-radius: 5px;
  }

  h2 {
    font-weight: 500;
    font-family: var(--poppins);
    font-size: 13px;
    color: var(--gray600);
    line-height: 19.5px;
  }
`;
