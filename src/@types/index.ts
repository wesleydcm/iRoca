import UserController from "../Providers/user/controller";

export interface IPurchaseSeller {
  name: string;
  email: string;
  phone: string;
}

export interface IAddress {
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
  address: IAddress;
  favorites: number[];
}

export interface IUserUpdate {
  id: number;
  personalData?: {
    name?: string;
    birthDate?: string;
    cpf?: string;
    phone?: string;
    image?: string;
    address?: IAddress;
  };
  token: string;
}

export interface IUserContext {
  user: IUser;
  setUser: React.Dispatch<React.SetStateAction<IUser>>;
  initController: () => UserController;
  tempUser: IUserInfo;
  setTempUser: React.Dispatch<React.SetStateAction<IUserInfo>>;
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
export interface IProductEvaluation {
  userId: number;
  productId: number;
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
  evaluations?: IEvaluation[];
  id?: number;
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
  id?: number;
  userId: number;
  sellerId: number;
  date: string;
  subtotal: number;
  delivery: number;
  total: number;
  isReceived: boolean;
  products: IProduct[];
}

export interface ITreatedPurchase {
  purchase: IPurchase;
  seller: IPurchaseSeller;
}

export interface EvaluationData {
  image?: string;
  name: string;
  feedback: string;
  grade: number;
}
//quando for fazer listar avaliações , fazer um getEvaluation pra pegar os ids e dps um getUser em cada card.

export interface PageWidth {
  pageWidth: number;
}

export interface IStyles {
  size?: number;
  width?: number;
  height?: number | string;
  color?: "green" | "white";
}

export interface ICategoriesAndTypes {
  FRUIT: string;
  VEGETABLES1: string;
  VEGETABLES2: string;
  FAVORITES: string;
  ORGANICS: string;
  COMMONS: string;
}

export interface IBestProducts {
  product: IProduct;
  average: number;
}

export interface ITreatedProduct {
  product: IProduct;
  average: number;
  isFavorite?: boolean;
}

export interface IProductUpdatePurchase {
  name?: string;
  description?: string;
  price?: number;
  qty: number;
  images?: string[];
  evaluations?: IEvaluations[];
}

export interface IEditProfile {
  name?: string;
  birthDate?: string;
  phone?: string;
  email?: string;
  cep?: string;
  city?: string;
  neighborhood?: string;
  street?: string;
  complement?: string;
}
