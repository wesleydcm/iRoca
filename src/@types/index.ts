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
	token?: string;
	auth?: boolean;
	evaluations?: IUserEvaluation[];
	average?: number;
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
		favorites?: number[];
	};
	token?: string;
}

export interface ILoginData {
	email: string;
	password: string;
}

export interface IUserEvaluation {
	id?: number;
	userId: number;
	feedback: string;
	grade: number;
	date: string;
	avaliatorId: number;
	avaliatorImage?: string;
	avaliatorName?: string;
}

export interface IProductEvaluation {
	id: string;
	productId: number;
	feedback: string;
	grade: number;
	date: string;
	avaliatorId: number;
	avaliatorImage?: string;
	avaliatorName?: string;
}

export interface IProductUpdate {
	name: string;
	category?: string;
	description: string;
	price: number;
	qty: number;
	images?: Image[];
	evaluations?: IProductEvaluation[];
}

export interface Image {
	url: string;
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
	evaluations: IProductEvaluation[];
	id?: number;
}

export interface IProductContext {
	products: IProduct[];
	setProducts: React.Dispatch<React.SetStateAction<IProduct[]>>;
}

export interface ICart {
	productsList: IProduct[];
	totalPrice: number;
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
	ALL: string;
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
