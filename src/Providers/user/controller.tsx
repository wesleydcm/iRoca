import { Dispatch, SetStateAction } from "react";
import { IUser, ILoginData } from "../../@types";
import api from "../../services/index";
import { errorToast, successToast } from "../../utils";
import { decodeToken } from "react-jwt";

class UserController {
  private user?: IUser;
  private setUser: Dispatch<SetStateAction<IUser>>;

  constructor(
    setUser: React.Dispatch<React.SetStateAction<IUser>>,
    user?: IUser
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
      const token = response.data.accessToken;
      const { sub } = decodeToken(token);

      successToast("Bem vindo !");
      const id = Number(sub);
      return await this.getUser(id);
    } catch (e) {
      errorToast("Usuário ou senha inválidos");
    }
  };

  getUser = async (id: number | "" = "") => {
    try {
      const response = await api.get(`/users/${id}`);
      return await response.data;
    } catch (e) {
      errorToast("Ocorreu algum erro no sistema");
    }
  };

  getPurchases = async (id: number) => {
    try {
      const response = await api.get(`/users/${id}/purchases/`);
      return await response.data;
    } catch (e) {
      errorToast("Ocorreu algum erro no sistema");
    }
  };

  getEvaluations = async (id: number) => {
    try {
      const response = await api.get(`/users/${id}/evaluations/`);
      return await response.data;
    } catch (e) {
      errorToast("Ocorreu algum erro no sistema");
    }
  };
  getProducts = async (id: number) => {
    try {
      const response = await api.get(`/users/${id}/products/`);
      return await response.data;
    } catch (e) {
      errorToast("Ocorreu algum erro no sistema");
    }
  };
}

export default UserController;
