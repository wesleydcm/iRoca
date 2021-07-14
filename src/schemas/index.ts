import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup.string().required("Necessário preencher o campo de email"),
  password: yup.string().required("Necessário preencher o campo de senha"),
});

export const createProductSchema = yup.object().shape({
  name: yup.string().required("Informe o nome"),
  category: yup.string().required("Escolha a categoria"),
  description: yup.string().required("Descreva o produto"),
  price: yup.string().required("Informe o preço"),
  qty: yup.string().required("Informe o estoque"),
  imageOne: yup.string(),
  imageTwo: yup.string(),
  imageThree: yup.string(),
  imageFour: yup.string(),
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
export const editProductSchema = yup.object().shape({
  name: yup.string(),
  description: yup.string(),
  price: yup.number(),
  qty: yup.number(),
  images: yup.array().of(
    yup.object().shape({
      url: yup.string(),
    })
  ),
});
