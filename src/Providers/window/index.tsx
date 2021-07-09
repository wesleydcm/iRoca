import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { PageWidth } from "../../@types";

interface Props {
    children: ReactNode;
}

const WindowCTX = createContext({} as PageWidth);

export const WindowProvider = ({ children }: Props) => {

	const [pageWidth, setPageWidth] = useState<number>(window.innerWidth);

	useEffect(() => {
		window.addEventListener("resize", () => setPageWidth(window.innerWidth));
	}, []);

	return (
		<WindowCTX.Provider
			value={{
				pageWidth,
			}}
		>
			{children}
		</WindowCTX.Provider>
	);
};

export const useWindow = () => useContext(WindowCTX);