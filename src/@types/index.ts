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
  personalData: IUserInfo;
  token: string;
  auth?: boolean;
}

export interface IUserInfo {
  name: string;
  email: string;
  password: string;
  birthDate: string;
  cpf: string;
  phone: string;
  image?: string;
  id: number;
  address: IAdress;
  favorites: number[] | [];
}

export interface IUserUpdate {
  id: number;
  personalData?: {
    name?: string;
    birthDate?: string;
    cpf?: string;
    phone?: string;
    image?: string;
    address?: IAdress;
  };
  token: string;
}

export interface IUserContext {
  user: IUser;
  setUser: React.Dispatch<React.SetStateAction<IUser>>;
  initController: () => UserController;
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

export interface Image {
  url: string;
}

export interface IEvaluation {
  userId: number;
  evaluatorId: number;
  date: string;
  feedback: string;
  grade: number;
}

export interface IProduct {
  name: string;
  category: string;
  description: string;
  userId: number;
  price: number;
  isOrganic: boolean;
  qty: number;
  images: Image[];
  evaluations: IEvaluation[];
  id: number;
}
export interface IProductContext {
  products: IProduct[];
  setProducts: React.Dispatch<React.SetStateAction<IProduct[]>>;
}
export interface ICartContext {
  cart: IProduct[];
  setCart: React.Dispatch<React.SetStateAction<IProduct[]>>;
}

export interface IPurchase {
  userId: number;
  sellerId: number;
  date: string;
  subtotal: number;
  delivery: number;
  total: number;
  isReceived: boolean;
  products: IProduct[];
}
export interface EvaluationData {
  image: string;
  name: string;
  feedback: string;
  grade: number;
}

//quando for fazer listar avaliações , fazer um getEvaluation pra pegar os ids e dps um getUser em cada card.
