import { IGeneralProviderProps } from "../@types";
import { UserProvider } from "./user";

const Providers = ({ children }: IGeneralProviderProps) => {
  return <UserProvider>{children}</UserProvider>;
};

export default Providers;
