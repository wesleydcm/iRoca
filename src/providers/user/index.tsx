import { createContext, ReactNode, useContext, useState } from "react";
import { IUser, IUserInfo } from "../../@types";
import { USER_LOCALSTORAGE_FLAG } from "../../utils";
import UserController from "./controller";
import { useProducts } from "../products";
import { useEffect } from "react";

interface Props {
  children: ReactNode;
}

interface IUserContext {
	user: IUser;
	setUser: React.Dispatch<React.SetStateAction<IUser>>;
	initController: () => UserController;
	tempUser: IUserInfo;
	setTempUser: React.Dispatch<React.SetStateAction<IUserInfo>>;
}

const userCTX = createContext({} as IUserContext);

export const UserProvider = ({ children }: Props) => {
  const haveUser = localStorage.getItem(USER_LOCALSTORAGE_FLAG);

  const defaultValue: IUser = haveUser === null ? {} : JSON.parse(haveUser);

  const [user, setUser] = useState<IUser>(defaultValue);
  const { products, setProducts } = useProducts();
  const [tempUser, setTempUser] = useState<IUserInfo>({} as IUserInfo);

  const initController = (): UserController => {
    return new UserController(setUser, setProducts, products, user);
  };

  useEffect(() => {
    if (user !== null) {
      localStorage.setItem(USER_LOCALSTORAGE_FLAG, JSON.stringify(user));
    }
  }, [user]);

  return (
    <userCTX.Provider
      value={{ user, initController, setUser, setTempUser, tempUser }}
    >
      {children}
    </userCTX.Provider>
  );
};

export const useUser = () => useContext(userCTX);
