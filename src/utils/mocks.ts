import { IEvaluation, Image, IProduct, IUser } from "../@types";

export const mockedProduct: IProduct = {
  name: "Mussum Ipsum",
  category: "fruit",
  description:
    "Mussum Ipsum, cacilds vidis litro abertis. Per aumento de cachacis, eu reclamis.",
  userId: 1,
  price: 2.5,
  isOrganic: true,
  qty: 100,
  images: [
    {
      url: "http://2.bp.blogspot.com/-M1-bXKeN3Ww/TfvOP9orTpI/AAAAAAAABqg/VdN6nIOw__8/s1600/morango.png",
    } as Image,
  ],
  evaluations: [{} as IEvaluation],
  id: 1,
};

export const mockedUser1: IUser = {
  personalData: {
    name: "Victor Ivan",
    birthDate: "12/08/1900",
    email: "victor@gmail.com",
    password: "123456",
    phone: "4002-8922",
    cpf: "1212121212",
    favorites: [],
    id: 1,
    address: {
      street: "Rua XXX xxxx",
      state: "Pernambuco",
      city: "Recife",
      neighborhood: "Bla bla",
    },
  },
  token: "",
  auth: false,
};
export const mockedUser2: IUser = {
  personalData: {
    name: "Bino",
    birthDate: "12/08/1900",
    email: "bino@gmail.com",
    password: "123456",
    phone: "4002-8922",
    cpf: "1212121212",
    id: 1,
    favorites: [],
    address: {
      street: "Rua XXX xxxx",
      state: "Pernambuco",
      city: "Recife",
      neighborhood: "Bla bla",
    },
  },
  token: "",
  auth: false,
};

export const mockedEvaluation = {
  image: "https://i.imgur.com/02IXYej.png",
  name: "Bino Amante de Morango",
  feedback: "É o rugaldis, cacilds morangis topsis fera.",
  grade: 4,
};
