import { createContext, ReactNode, useContext, useState } from "react";
import { IUserContext, IUser } from "../../@types";
import { USER_LOCALSTORAGE_FLAG } from "../../utils";
import UserController from "./controller";
import { useProducts } from "../products";
import { useEffect } from "react";

interface Props {
  children: ReactNode;
}

const userCTX = createContext({} as IUserContext);

export const UserProvider = ({ children }: Props) => {
  const haveUser = localStorage.getItem(USER_LOCALSTORAGE_FLAG);

  const defaultValue: IUser = haveUser === null ? null : JSON.parse(haveUser);

  const [user, setUser] = useState<IUser>(defaultValue);
  const { products, setProducts } = useProducts();

  const initController = (): UserController => {
    return new UserController(setUser, setProducts, products, user);
  };

  useEffect(() => {
    if (user !== null) {
      localStorage.setItem(USER_LOCALSTORAGE_FLAG, JSON.stringify(user));
    }
    // console.log(user);
  }, [user]);

  return (
    <userCTX.Provider value={{ user, initController, setUser }}>
      {children}
    </userCTX.Provider>
  );
};

export const useUser = () => useContext(userCTX);
