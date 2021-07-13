import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup.string().required("Necessário preencher o campo de email"),
  password: yup.string().required("Necessário preencher o campo de senha"),
});
