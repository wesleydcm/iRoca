import { useEffect } from "react";
import { createContext, ReactNode, useContext, useState } from "react";
import { ICartContext, IProuctCart } from "../../@types";
import { CART_LOCALSTORAGE_FLAG } from "../../utils";

interface Props {
  children: ReactNode;
}

const cartCTX = createContext({} as ICartContext);

export const CartProvider = ({ children }: Props) => {
  const haveCart = localStorage.getItem(CART_LOCALSTORAGE_FLAG);

  const defaultValue: IProuctCart[] =
    haveCart === null ? ([] as IProuctCart[]) : JSON.parse(haveCart);

  const [cart, setCart] = useState<IProuctCart[]>(defaultValue);

  useEffect(() => {
    if (cart.length !== 0) {
      localStorage.setItem(CART_LOCALSTORAGE_FLAG, JSON.stringify(cart));
    }
  }, [cart]);

  return (
    <cartCTX.Provider value={{ cart, setCart }}>{children}</cartCTX.Provider>
  );
};

export const useCart = () => useContext(cartCTX);
