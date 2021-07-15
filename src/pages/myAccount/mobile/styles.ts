import styled from "styled-components";
import { NavLink } from "react-router-dom";
export const NotAuthContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
`;
export const BigContainer = styled.div`
	flex: 1;
	max-height: 90vh;
	display: flex;
	flex-wrap: wrap;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;

	div:nth-child(3) {
		margin-top: 5vh;
		margin-left: unset;
		button[data-css="exit-button"] {
			background: linear-gradient(89.98deg, #ff958e 0.02%, #fe9a9a 99.98%);
			border-radius: 7px;
			color: #ffffff;
			border: none;
			padding: 0 10px;

			height: 47px;
			font-size: 18px;
			font-weight: 600;
			font-family: var(--poppins);
		}
	}
`;
export const Link = styled(NavLink)`
	width: 100%;
	height: 65px;
	margin: 10px 0px;
	color: white;
`;

export const ContainerButtons = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100%;
	button {
		width: 18rem;
		height: 4rem;
		margin: 1rem 0;
	}
	@media only screen and (max-width: 500px) {
		button {
			width: 240px;
		}
	}
`;
export const Title = styled.h1`
	font-family: var(--poppins);
	color: var(--green400);
	font-size: 1.9rem;
	font-weight: 600;
	margin-top: 5vh;
	margin-left: 8vw;
`;

export const LeaveContainer = styled.div`
	display: flex;
	align-self: flex-end;
	margin: 20px auto;

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
