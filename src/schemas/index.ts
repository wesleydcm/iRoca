import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup.string().required("Necessário preencher o campo de email"),
  password: yup.string().required("Necessário preencher o campo de senha"),
});

export const createProductSchema = yup.object().shape({
  name: yup.string().required("Necessário preencher o campo de nome"),
  //category: yup.string().required("Necessário informar uma categoria"),
  description: yup.string().required("Necessário preencher o campo de descrição"),
  price: yup.number().required("Necessário informar o preço"),
  isOrganic: yup.boolean().required("Necessário informar se é orgânico"),
  qty: yup.number().required("Necessário informar o estoque"),
  imageOne: yup.string(),
  imageTwo: yup.string(),
  imageThree: yup.string(),
  imageFour: yup.string(),
});
