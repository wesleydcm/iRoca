import { Dispatch, SetStateAction } from "react";
import type {
	IUser,
	ILoginData,
	IUserUpdate,
	IProductUpdate,
	IPurchase,
	IEvaluations,
	IProduct,
	IEvaluation,
	ITreatedProduct,
	IUserInfo,
	IProductEvaluation,
} from "../../@types";
import api from "../../services/index";
import { errorToast, successToast } from "../../utils";
import { decodeToken } from "react-jwt";
import { decode } from "querystring";

class UserController {
	private setUser: Dispatch<SetStateAction<IUser>>;
	private setProducts: Dispatch<SetStateAction<IProduct[]>>;
	private products: IProduct[];
	private user: IUser;

	constructor(
		setUser: Dispatch<SetStateAction<IUser>>,
		setProducts: Dispatch<SetStateAction<IProduct[]>>,
		products: IProduct[],
		user: IUser,
	) {
		this.setUser = setUser;
		this.setProducts = setProducts;
		this.products = products;
		this.user = user;
	}

	registerUser = async (user: IUser | IUserInfo) => {
		try {
			const response = await api.post("/users", user);
			console.log(response);
			successToast("Sucesso ao criar usuário");
		} catch (e) {
			console.log("teste");
			errorToast("Email ja cadastrado");
		}
	};

	login = async (data: ILoginData) => {
		try {
			const response = await api.post("/login", data);

			console.log(response);
			const token = response.data.accessToken;
			const { sub } = decodeToken(token);

			const id = Number(sub);
			const userInfo = await this.getUser(id);

			successToast(`Bem vindo ${userInfo.name}!`);
			this.setUser({
				token,
				personalData: userInfo,
				auth: true,
			});
		} catch (e) {
			errorToast("Usuário ou senha inválidos");
		}
	};

	getUser = async (userId: number | "" = "") => {
		try {
			const response = await api.get(`/users/${userId}`);
			return await response.data;
		} catch (e) {
			errorToast("Ocorreu algum erro no sistema");
		}
	};

	getProduct = async (productId: number | "" = "") => {
		try {
			const response = await api.get(`/products/${productId}`);
			return await response.data;
		} catch (e) {
			errorToast("Ocorreu algum erro no sistema");
		}
	};

	getPurchasesOfUser = async (userId: number) => {
		try {
			const response = await api.get(`/users/${userId}/purchases/`);
			return response.data;
		} catch (e) {
			errorToast("Ocorreu algum erro no sistema");
		}
	};

	getUserOfEvaluation = async (evaluation: any) => {
		const user = await this.getUser(evaluation.avaliatorId);
		return {
			avaliator: user,
			evaluation: evaluation,
		};
	};

	getEvaluationsOfUser = async (userId: number) => {
		try {
			const response = await api.get(`/users/${userId}/evaluations/`);
			return Promise.all(
				response.data.map((evaluation: IEvaluations) =>
					this.getUserOfEvaluation(evaluation),
				),
			);
		} catch (e) {
			errorToast("Ocorreu algum erro no sistema");
		}
	};

	getProductsOfUser = async (userId: number) => {
		try {
			const response = await api.get(`/users/${userId}/products/`);
			return await response.data;
		} catch (e) {
			errorToast("Ocorreu algum erro no sistema");
		}
	};
	updateUser = async (data: IUserUpdate) => {
		try {
			const response = await api.patch(
				`/users/${data.id}/`,
				data.personalData,
				{
					headers: { Authorization: `Bearer ${data.token}` },
				},
			);
			this.setUser({
				...this.user,
				personalData: {
					...this.user.personalData,
					...response.data.personalData,
				},
			});
			successToast("Usuário atualizado com sucesso");
			return await response.data;
		} catch (e) {
			errorToast("Não foi possível atualizar usuário");
		}
	};

	deleteUser = async (userId: number) => {
		try {
			await api.delete(`/users/${userId}/`);
			successToast("Usuário excluído com sucesso");
		} catch (e) {
			errorToast("Não foi possível excluir usuário");
		}
	};

	createProduct = async (token: string, product: IProduct) => {
		const { sub } = decodeToken(token);
		//se o token for valido, vai retornar um id diferente de 0
		product.userId = Number(sub) || 0;
		try {
			const response = await api.post(`/products/`, product, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
			this.setProducts([...this.products, response.data]);
			successToast("Produto criado com sucesso");
		} catch (e) {
			errorToast("Não foi possível criar produto");
		}
	};

	getSellerOfProduct = async (productId: number) => {
		try {
			const { data } = await api.get(`/products/${productId}`);

			return await this.getUser(data.userId);
		} catch (e) {
			errorToast("Não foi possível encontrar usuário");
		}
	};

	updateProduct = async (
		productId: number,
		productData: IProductUpdate,
		token: string,
	) => {
		try {
			const { data } = await api.patch(`/products/${productId}`, productData, {
				headers: { Authorization: `Bearer ${token}` },
			});
			const newProducts = this.products.map(item => {
				if (item.id === data.id) {
					return {
						...item,
						...data,
					};
				} else {
					return item;
				}
			});
			this.setProducts(newProducts);
			successToast("Produto atualizado com sucesso");
			return data;
		} catch (e) {
			errorToast("Não foi possível atualizar produto");
		}
	};
	deleteProduct = async (productId: number, token: string) => {
		try {
			const { data } = await api.delete(`/products/${productId}`, {
				headers: { Authorization: `Bearer ${token}` },
			});
			console.log(data);
			const newProducts = this.products.filter(item => item.id !== productId);
			this.setProducts(newProducts);
			successToast("Produto excluido com sucesso");
		} catch (e) {
			errorToast("Não foi possível excluir produto");
		}
	};

	createPurchase = async (token: string, purchase: IPurchase) => {
		const { sub } = decodeToken(token);
		try {
			await api.post(`/purchases/`, purchase, {
				headers: { Authorization: `Bearer ${token}` },
			});

			successToast(
				"Compra efetuada com sucesso, agora é só esperar o produto chegar na sua casa :)",
			);
			//retorna uma nova lista de compras pra atualizar o feed
			return await this.getPurchasesOfUser(Number(sub));
		} catch (e) {
			errorToast("Não foi possível concluir compra");
		}
	};

	updatePurchase = async (
		token: string,
		purchaseId: number,
		isReceived: boolean,
	) => {
		try {
			const { sub } = decode(token);
			await api.patch(
				`/purchases/${purchaseId}`,
				{ isReceived },
				{
					headers: { Authorization: `Bearer ${token}` },
				},
			);
			successToast("Dados salvos!");
			//retorna a nova lista de compras para atualizar o feed
			const newList = await this.getPurchasesOfUser(Number(sub));
			console.log("newList :>> ", newList);
			return newList;
		} catch (e) {
			errorToast("Não foi possível atualizar estado da compra");
		}
	};
	createProductorEvaluation = async (
		token: string,
		evaluation: IEvaluations,
	) => {
		try {
			const { data } = await api.post(`/evaluations/`, evaluation, {
				headers: { Authorization: `Bearer ${token}` },
			});
			successToast("Avaliação enviada");
			return data;
		} catch (e) {
			errorToast("Não foi possível concluir avaliação");
		}
	};
	createProductEvaluation = async (
		token: string,
		evaluation: IProductEvaluation,
	) => {
		try {
			const { evaluations } = await this.getProduct(evaluation.productId);
			const { data } = await api.patch(
				`/products/${evaluation.productId}`,
				[...evaluations, evaluation],
				{
					headers: { Authorization: `Bearer ${token}` },
				},
			);
			const newProducts = this.products.map(item => {
				if (item.id === data.id) {
					return data;
				} else {
					return item;
				}
			});
			this.setProducts(newProducts);
			successToast("Avaliação enviada");
			return data;
		} catch (e) {
			errorToast("Não foi possível concluir avaliação");
		}
	};
	favoriteProduct = async (token: string, evaluation: IEvaluations) => {
		try {
			const { data } = await api.post(`/evaluations/`, evaluation, {
				headers: { Authorization: `Bearer ${token}` },
			});
			successToast("Avaliação enviada");
			return data;
		} catch (e) {
			errorToast("Não foi possível concluir avaliação");
		}
	};

	getEvaluationsAverage = (item: IProduct): ITreatedProduct => {
		if (item.evaluations && item.evaluations.length) {
			const average =
				item.evaluations.reduce((acc: number, evaluation: IEvaluation) => {
					return acc + evaluation.grade;
				}, 0) / item.evaluations.length;

			return { product: item, average };
		}
		return { product: item, average: 0 };
	};

	getAllAverages = (productsList: IProduct[]): ITreatedProduct[] => {
		if (productsList.length) {
			const averagesList = productsList.map(item =>
				this.getEvaluationsAverage(item),
			);

			averagesList.sort(
				(productA, productB) => productB.average - productA.average,
			);
			return averagesList;
		}
		return [];
	};
}

export default UserController;
