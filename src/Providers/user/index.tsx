import React, { createContext, ReactNode, useContext, useState } from "react";
import { IUserContext, IUser, IUserUpdate } from "../../@types";
import { USER_LOCALSTORAGE_FLAG } from "../../utils";
import UserController from "./controller";

interface Props {
  children: ReactNode;
}

const userCTX = createContext({} as IUserContext);

export const UserProvider = ({ children }: Props) => {
  const haveUser = localStorage.getItem(USER_LOCALSTORAGE_FLAG);

  const defaultValue: IUser = haveUser === null ? null : JSON.parse(haveUser);

  const [user, setUser] = useState<IUser>(defaultValue);

  const userController = (
    userData: IUser | IUserUpdate | undefined
  ): UserController => {
    return new UserController(setUser, userData);
  };

  return (
    <userCTX.Provider value={{ user, userController, setUser }}>
      {children}
    </userCTX.Provider>
  );
};

export const useUser = () => useContext(userCTX);
