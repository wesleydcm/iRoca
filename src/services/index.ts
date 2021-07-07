import axios from "axios";

const baseURL = "https://iroca-api.herokuapp.com";

const api = axios.create({ baseURL });

export default api;
