import styled from "styled-components";
import Button from "../../../components/Button";
import { NavLink } from "react-router-dom";
export const NotAuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 27vw;
`;
export const BigContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  flex-direction: column;
  padding-left: 30vw;
  padding-right: 4rem;
`;

export const Link = styled(NavLink)`
  width: 35%;
  height: 65px;
  margin: 15px 32px;
  color: white;
`;
export const ContainerButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  height: 100%;

  button {
    width: 100%;
    height: 100%;
  }
`;
export const Title = styled.h1`
  color: var(--green400);
  font-size: 48px;
  font-family: var(--poppins);
  font-weight: 600;
  line-height: 42px;
  margin: 38px 32px;
  height: fit-content;
`;

export const LeaveContainer = styled.div`
  display: flex;
  align-self: flex-end;
  margin: 0 auto;

  @media only screen and (min-height: 670px) {
    margin: 20px auto;
  }

  @media only screen and (min-height: 700px) {
    margin: 50px auto;
  }

  @media only screen and (min-height: 760px) {
    margin: 130px auto;
  }
`;
export const LeaveButton = styled(Button)`
  background: linear-gradient(89.98deg, #ff958e 0.02%, #fe9a9a 99.98%);
  border-radius: 7px;
  color: #ffffff;

  height: 47px;
  font-size: 18px;
  font-weight: 600;
  font-family: var(--poppins);
  margin: auto;
`;

export const NotAuthText = styled.h2`
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  font-family: var(--poppins);
  color: #b8b8b8;
  margin: 32px 30px;
  h3 {
    color: var(--green400);
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
  }
`;
