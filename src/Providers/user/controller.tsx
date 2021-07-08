import { Dispatch, SetStateAction } from "react";
import { IUser, ILoginData, IUserUpdate, IProductUpdate } from "../../@types";
import api from "../../services/index";
import { errorToast, successToast } from "../../utils";
import { decodeToken } from "react-jwt";

class UserController {
  private user?: IUser | IUserUpdate;
  private setUser: Dispatch<SetStateAction<IUser>>;

  constructor(
    setUser: Dispatch<SetStateAction<IUser>>,
    user?: IUser | IUserUpdate
  ) {
    this.user = user;
    this.setUser = setUser;
  }

  register = async () => {
    try {
      const response = await api.post("/users", this.user);
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
        info: userInfo,
        auth: true,
      });
      return {
        token,
        user: userInfo,
      };
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

  getPurchases = async (userId: number) => {
    try {
      const response = await api.get(`/users/${userId}/purchases/`);
      return await response.data;
    } catch (e) {
      errorToast("Ocorreu algum erro no sistema");
    }
  };

  getEvaluations = async (userId: number) => {
    try {
      const response = await api.get(`/users/${userId}/evaluations/`);
      return await response.data;
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
  update = async (data: IUserUpdate) => {
    try {
      const response = await api.patch(`/users/${data.id}/`, data.info, {
        headers: { Authorization: `Bearer ${data.token}` },
      });
      successToast("Usuário atualizado com sucesso");
      return await response.data;
    } catch (e) {
      errorToast("Não foi possível atualizar usuário");
    }
  };

  delete = async (userId: number) => {
    try {
      await api.delete(`/users/${userId}/`);
      successToast("Usuário excluído com sucesso");
    } catch (e) {
      errorToast("Não foi possível excluir usuário");
    }
  };

  //Lembrar de criar a interface de Produtos
  createProduct = async (token: string, product: any) => {
    const { sub } = decodeToken(token);
    product.userId = Number(sub) || 0;
    try {
      const response = await api.post(`/products/`, product, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      successToast("Produto Criado com sucesso");
    } catch (e) {
      errorToast("Não foi possível criar produto");
    }
  };

  getSeller = async (productId: number) => {
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
    token: string
  ) => {
    try {
      const { data } = await api.patch(`/products/${productId}`, productData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log(data);
      successToast("Produto atualizado com sucesso");
      return data;
    } catch (e) {
      errorToast("Não foi possível atualizar produto");
    }
  };
}

export default UserController;
