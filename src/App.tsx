import React from "react";
import Button from "./Components/Button";
import { ReactComponent as IrocaLogo } from "./assets/images-mobile/logo.svg";
import { useUser } from "./Providers/user";

const App: React.FC = () => {
  const { userController } = useUser();

  const product = {
    name: "Morango 3",
    category: "fruit",
    description: "",
    userId: 2,
    price: 99.99,
    isOrganic: true,
    qty: 99.99,
    images: [
      { link1: "https://www.imagem1.com.br.jpg" },
      { link2: "https://www.imagem2.com.br.jpg" },
      { link3: "https://www.imagem3.com.br.jpg" },
      { link4: "https://www.imagem4.com.br.jpg" },
      { link5: "https://www.imagem5.com.br.jpg" },
    ],
  };
  const token = "sasd";

  const clicked = (): void => {
    const localUser = userController(undefined);
    localUser.createProduct(token, product).then((response) => {
      console.log(response);
    });
  };

  return (
    <>
      <IrocaLogo />
      <Button type="button" color="green" value="entrar" />
      <Button type="button" value="sair" />
      <button onClick={() => clicked()}>Click me</button>
    </>
  );
};
export default App;
