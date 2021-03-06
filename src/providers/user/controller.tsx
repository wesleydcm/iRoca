import { Dispatch, SetStateAction } from "react";
import type {
	IUser,
	ILoginData,
	IUserUpdate,
	IProductUpdate,
	IProduct,
	ITreatedProduct,
	IUserInfo,
	IPurchase,
	IUserEvaluation,
	IProductEvaluation,
} from "../../@types";
import api from "../../services/index";
import { errorToast, successToast } from "../../utils";
import { decodeToken } from "react-jwt";
import { decode } from "querystring";
import { AxiosResponse } from "axios";

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
		} catch {
			errorToast("Não foi possível buscar seus dados.");
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

	getUserPurchases = async (userId: number) => {
		try {
			const response = await api.get(`/users/${userId}/purchases/`);
			return response.data;
		} catch (e) {
			errorToast("Ocorreu algum erro no sistema");
		}
	};

	getAvaliator = async (
		evaluation: IUserEvaluation,
	): Promise<IUserEvaluation> => {
		const avaliator: IUser = await this.getUser(evaluation.avaliatorId);

		return {
			...evaluation,
			avaliatorImage: avaliator.personalData?.image,
			avaliatorName: avaliator.personalData?.name,
		};
	};

	getUserEvaluations = async (userId: number) => {
		try {
			const evaluationsList: AxiosResponse<IUserEvaluation[]> = await api.get(
				`/users/${userId}/evaluations/`,
			);

			return Promise.all(
				evaluationsList.data.map((evaluation: IUserEvaluation) =>
					this.getAvaliator(evaluation),
				),
			);
		} catch {
			errorToast("Ocorreu algum erro no sistema");
		}
	};

	getUserProducts = async (userId: number) => {
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

	handleFavorite = async (userId: number, data: number[], token: string) => {
		try {
			const response = await api.patch(
				`/users/${userId}/`,
				{ favorites: data },
				{
					headers: { Authorization: `Bearer ${token}` },
				},
			);
			if (data.length) {
				this.user.personalData.favorites = data;
			}
			successToast("Dados salvos.");
			return await response.data;
		} catch {
			errorToast("Não foi possível adicionar como favorito");
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

	getProductSeller = async (
		productId: number,
	): Promise<IUserInfo | undefined> => {
		try {
			const { data } = await api.get(`/products/${productId}`);

			return await this.getUser(data.userId);
		} catch (e) {
			errorToast("Não foi possível encontrar usuário");
		}
	};

	updateProduct = async (
		productId: number,
		productData: IProductUpdate | { qty: number },
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
			errorToast("Não foi possível excluir o produto");
		}
	};

	createPurchase = async (token: string, purchase: IPurchase) => {
		const { sub } = decodeToken(token);
		try {
			await api.post(`/purchases/`, purchase, {
				headers: { Authorization: `Bearer ${token}` },
			});

			//retorna uma nova lista de compras pra atualizar o feed
			return await this.getUserPurchases(Number(sub));
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
			const newList = await this.getUserPurchases(Number(sub));
			console.log("newList :>> ", newList);
			return newList;
		} catch (e) {
			errorToast("Não foi possível atualizar estado da compra");
		}
	};

	createSellerEvaluation = async (
		token: string,
		evaluation: IUserEvaluation,
	) => {
		try {
			const { data } = await api.post(`/evaluations/`, evaluation, {
				headers: { Authorization: `Bearer ${token}` },
			});
			successToast("Avaliação enviada.");
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
				{ evaluations: [...evaluations, evaluation] },
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
			successToast("Avaliação enviada.");
			return data;
		} catch {
			errorToast("Não foi possível concluir avaliação");
		}
	};
	favoriteProduct = async (token: string, evaluation: IProductEvaluation) => {
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
				item.evaluations.reduce((acc, evaluation) => {
					if (evaluation.grade) {
						return acc + evaluation.grade;
					}
					return acc;
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
	getProductEvaluationData = async (
		evaluation: IProductEvaluation,
	): Promise<IProductEvaluation> => {
		const avaliatorData: IUserInfo = await this.getUser(evaluation.avaliatorId);
		return {
			...evaluation,
			avaliatorName: avaliatorData.name,
			avaliatorImage: avaliatorData.image || "https://i.imgur.com/ac5JjOM.png",
		};
	};

	getAllProductEvaluationsData = async (evaluations: IProductEvaluation[]) => {
		return Promise.all(
			evaluations.map((evaluation: IProductEvaluation) => {
				return this.getProductEvaluationData(evaluation);
			}),
		);
	};

	getSellerEvaluationData = async (
		evaluation: IUserEvaluation,
	): Promise<IUserEvaluation> => {
		const avaliatorData: IUserInfo = await this.getUser(evaluation.avaliatorId);
		return {
			...evaluation,
			avaliatorName: avaliatorData.name,
			avaliatorImage: avaliatorData.image || "https://i.imgur.com/ac5JjOM.png",
		};
	};

	getAllSellerEvaluationsData = async (evaluations: IUserEvaluation[]) => {
		return Promise.all(
			evaluations.map((evaluation: IUserEvaluation) => {
				return this.getSellerEvaluationData(evaluation);
			}),
		);
	};
}

export default UserController;
