import styled from "styled-components";
import Button from "../../../Components/Button";

export const NotAuthContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const BigContainer = styled.div`
  min-height: 662px;
  display: flex;
  flex-wrap: wrap;

  flex-direction: column;
  padding-left: 35vw;
  padding-right: 4rem;
`;

export const ContainerButtons = styled.div`
  display: flex;
  flex-wrap: wrap;

  justify-content: center;
  align-items: center;
  height: 100%;
  margin: 0 auto;
  button {
    width: 35%;
    height: 65px;
    margin: 15px 32px;
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
