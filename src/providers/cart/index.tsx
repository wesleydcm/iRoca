import { useEffect } from "react";
import { createContext, ReactNode, useContext, useState } from "react";
import { ICart } from "../../@types";
import { CART_LOCALSTORAGE_FLAG } from "../../utils";

interface Props {
	children: ReactNode;
}

interface ICartContext {
	cart: ICart;
	setCart: React.Dispatch<React.SetStateAction<ICart>>;
}

const cartCTX = createContext({} as ICartContext);

export const CartProvider = ({ children }: Props) => {
	const haveCart = localStorage.getItem(CART_LOCALSTORAGE_FLAG);

	const defaultValue: ICart =
		haveCart === null ? ({} as ICart) : JSON.parse(haveCart);

	const [cart, setCart] = useState<ICart>(defaultValue);

	useEffect(() => {
		localStorage.setItem(CART_LOCALSTORAGE_FLAG, JSON.stringify(cart));
	}, [cart]);

	return (
		<cartCTX.Provider value={{ cart, setCart }}>{children}</cartCTX.Provider>
	);
};

export const useCart = () => useContext(cartCTX);
