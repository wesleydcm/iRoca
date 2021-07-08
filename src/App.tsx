import React, { useState } from "react";
import Button from "./Components/Button";
import MobileInputIcon from "./Components/InputIcon/mobile";
import DesktopInputIcon from "./Components/InputIcon/desktop";
import Input from "./Components/Input";
import ProductCardInCartMobile from "./Components/ProductCardInCart/mobile";
import ProductCardInCart from "./Components/ProductCardInCart/desktop";
import { ReactComponent as CloseSvg } from "./assets/images-desktop/close.svg";
import { ReactComponent as SearchSvg } from "./assets/images-desktop/search.svg";
import { IEvaluation, Image, IProduct } from "./@types";
import { WINDOW_SIZE_DESKTOP } from "./utils";
const App: React.FC = () => {
  const [value, setValue] = useState<string>("");
  const [value2, setValue2] = useState<string>("");
  const [value3, setValue3] = useState<string>("");
  const [value4, setValue4] = useState<string>("");
  const mockedProduct: IProduct = {
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
  };

  return (
    <>
      <Button color="green">entrar</Button>
      <Button>sair</Button>
      {window.outerWidth > 899 ? (
        <>
          <DesktopInputIcon
            type="text"
            placeholder="nome"
            icon={CloseSvg}
            value={value}
            setValue={setValue}
          />
          <DesktopInputIcon
            type="text"
            placeholder="buscar"
            icon={SearchSvg}
            action="search"
            color="white"
            value={value2}
            setValue={setValue2}
          />
        </>
      ) : (
        <>
          <MobileInputIcon
            type="text"
            placeholder="nome"
            icon={CloseSvg}
            value={value}
            setValue={setValue}
          />
          <MobileInputIcon
            type="text"
            placeholder="buscar"
            icon={SearchSvg}
            action="search"
            color="white"
            value={value2}
            setValue={setValue2}
          />
        </>
      )}
      <Input
        type="text"
        placeholder="buscar"
        color="green"
        value={value3}
        setValue={setValue3}
      />
      <Input
        type="text"
        placeholder="buscar"
        color="white"
        value={value4}
        setValue={setValue4}
      />
      {window.outerWidth > WINDOW_SIZE_DESKTOP ? (
        <ProductCardInCart item={mockedProduct} />
      ) : (
        <ProductCardInCartMobile item={mockedProduct} />
      )}
    </>
  );
};

export default App;
