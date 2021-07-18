import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
	position: absolute;
	width: 2.5vw;
	height: 100vh;
	top: 0;
	left: 25vw;
	background-color: var(--white);
`;

const MenuAuxDiv: React.FC = (): JSX.Element => {
	return <Wrapper></Wrapper>;
};

export default MenuAuxDiv;
