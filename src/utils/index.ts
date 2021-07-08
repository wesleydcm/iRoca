import { toast } from "react-toastify";

export const WINDOW_SIZE_DESKTOP = 900;

export const USER_LOCALSTORAGE_FLAG = "@iroca/user";

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
