import { createContext, useContext, useState, useEffect } from "react";
import { IUserContext, IUser, IUserProviderProps, IError } from "../../@types";
import { USER_LOCALSTORAGE_FLAG } from "../../utils";
import UserController from "./controller";

const userCTX = createContext({} as IUserContext);

export const UserProvider = ({ children }: IUserProviderProps) => {
  const haveUser = localStorage.getItem(USER_LOCALSTORAGE_FLAG);

  const defaultValue: IUser = haveUser === null ? null : JSON.parse(haveUser);

  const [user, setUser] = useState<IUser>(defaultValue);

  const createLocalUser = (userData: IUser | undefined): UserController => {
    return new UserController(setUser, userData);
  };

  return (
    <userCTX.Provider value={{ user, createLocalUser, setUser }}>
      {children}
    </userCTX.Provider>
  );
};

export const useUser = () => useContext(userCTX);
