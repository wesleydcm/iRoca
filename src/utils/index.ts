import { toast } from "react-toastify";

export const WINDOW_SIZE_DESKTOP = 900;

export const USER_LOCALSTORAGE_FLAG = "@iroca/user";
export const PRODUCTS_LOCALSTORAGE_FLAG = "@iroca/products";
export const CART_LOCALSTORAGE_FLAG = "@iroca/cart";

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
