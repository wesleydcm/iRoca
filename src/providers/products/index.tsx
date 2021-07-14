import { useEffect } from "react";
import { createContext, ReactNode, useContext, useState } from "react";
import { IProductContext, IProduct } from "../../@types";
import { PRODUCTS_LOCALSTORAGE_FLAG } from "../../utils";

interface Props {
  children: ReactNode;
}

const productsCTX = createContext({} as IProductContext);

export const ProductsProvider = ({ children }: Props) => {
  const haveProducts = localStorage.getItem(PRODUCTS_LOCALSTORAGE_FLAG);

  const defaultValue: IProduct[] =
    haveProducts === null ? null : JSON.parse(haveProducts);

  const [products, setProducts] = useState<IProduct[]>(defaultValue);

  useEffect(() => {
    if (products !== null) {
      localStorage.setItem(
        PRODUCTS_LOCALSTORAGE_FLAG,
        JSON.stringify(products)
      );
    }
  }, [products]);

  return (
    <productsCTX.Provider value={{ products, setProducts }}>
      {children}
    </productsCTX.Provider>
  );
};

export const useProducts = () => useContext(productsCTX);
