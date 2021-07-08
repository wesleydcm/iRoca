import UserController from "../Providers/user/controller";

export interface IAdress {
  cep?: string;
  state: string;
  city: string;
  neighborhood: string;
  street: string;
  complement?: string;
}

export interface IUser {
  info: IUserInfo;
  token: string;
  auth: boolean;
}

export interface IUserInfo {
  name: string;
  email: string;
  password: string;
  birthDate: string;
  cpf: string;
  phone: string;
  image?: string;
  id?: number;
  auth?: boolean;
  address: IAdress;
}

export interface IUserUpdate {
  id: number;
  info?: {
    name?: string;
    birthDate?: string;
    cpf?: string;
    phone?: string;
    image?: string;
    id?: number;
    auth?: boolean;
    address?: IAdress;
  };
  token: string;
}

export interface IUserContext {
  user: IUser;
  setUser: React.Dispatch<React.SetStateAction<IUser>>;
  userController: (userData: IUser | undefined) => UserController;
}

export interface ILoginData {
  email: string;
  password: string;
}

export interface IEvaluations {
  userId: number;
  evaluatorId: number;
  date: string;
  feedback: string;
  grade: number;
}

export interface IProductUpdate {
  name: string;
  description?: string;
  price: number;
  qty: number;
  images: string[];
  evaluations: IEvaluations[];
}
