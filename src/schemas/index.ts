import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup.string().required("Necessário preencher o campo de email"),
  password: yup.string().required("Necessário preencher o campo de senha"),
});
export const editProfileSchema = yup.object().shape({
  name: yup.string(),
  birthDate: yup.string(),
  phone: yup.string(),
  email: yup.string(),
  cep: yup.string(),
  city: yup.string(),
  neighborhood: yup.string(),
  street: yup.string(),
  complement: yup.string(),
});
