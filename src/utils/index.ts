import { toast } from "react-toastify";

export const WINDOW_SIZE_DESKTOP = 900;

export const USER_LOCALSTORAGE_FLAG = "@iroca/user";
export const PRODUCTS_LOCALSTORAGE_FLAG = "@iroca/products";
export const CART_LOCALSTORAGE_FLAG = "@iroca/cart";
export const EDIT_PRODUCT_LOCALSTORAGE_FLAG = "@iroca/editproduct";

export const categoriesAndTypes = {
  FRUIT: "frutas",
  VEGETABLES1: "legumes",
  VEGETABLES2: "verduras",
  FAVORITES: "favoritos",
  ORGANICS: "orgânicos",
  COMMONS: "comuns",
};

export const successToast = (message: string) => {
  toast(message, {
    position: "top-right",
    type: "success",
  });
};

export const errorToast = (message: string) => {
  toast(message, {
    position: "top-right",
    type: "error",
  });
};
export const priceFormatter = (value: number | bigint) =>
  Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);

export const FEEDBACK_MESSAGES = {
  WITHOUT_PRODUCTS: "Sem produtos cadastrados por enquanto.",
  WITHOUT_EVALUATION: "Produtor ainda não foi avaliado.",
};
