import styled from "styled-components";
import { motion } from "framer-motion";
export const BlurBackground = styled.div`
position: fixed;
  z-index: 3000;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  top: 0;
  left: 0;
  section {    
  position: absolute;
  z-index: 3001;
  
    border-radius: 15px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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

export const Container = styled(motion.div)`
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

  @media only screen and (max-width: 400px) {
    width: 100%;
    height: 323px;
  }

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

export const ContainerTeste = styled(motion.div)`
  width: 361px;
  height: 323px;
  background-color: #ffffff;
  transition: all 0.2s;
  transform: translateX(-100px);
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

  @media only screen and (max-width: 400px) {
    width: 100%;
    height: 323px;
  }

  input {
    width: 306px;
    height: 97px;
    border: 3px solid var(--green400);
    border-radius: 5px;
  }

  h2,
  h4 {
    font-weight: 500;
    font-family: var(--poppins);
    font-size: 13px;
    color: var(--gray600);
    line-height: 19.5px;
  }
  h4 {
    display: inline-block;
    color: var(--green300);
  }
`;
