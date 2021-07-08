import UserController from "../Providers/user/controller";

interface ChildrenProp {
  children: React.ReactNode;
}
export interface IUserProviderProps extends ChildrenProp {}
export interface IGeneralProviderProps extends ChildrenProp {}

export interface IAdress {
  cep: string;
  state: string;
  city: string;
  neighborhood: string;
  street: string;
  complement?: string;
}
export interface IUser {
  id: number;
  email: string;
  password: string;
  image: string;
  name: string;
  birthDate: string;
  auth?: boolean;
  cpf: string;
  phone: string;
  address: IAdress;
}

export interface IUserContext {
  user: IUser;
  setUser: React.Dispatch<React.SetStateAction<IUser>>;
  createLocalUser: (userData: IUser | undefined) => UserController;
}

export interface ILoginData {
  email: string;
  password: string;
}
