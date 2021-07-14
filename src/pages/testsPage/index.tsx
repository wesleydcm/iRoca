import { useState } from "react";
import Button from "../../components/Button";
import InputIconDesktop from "../../components/InputIcon/desktop";
import Input from "../../components/Input";
import ProductCardInCartHistory from "../../components/ProductCardInCartHistory/desktop";
import ProductCardInCartHistoryMobile from "../../components/ProductCardInCartHistory/mobile";
import { ReactComponent as CloseSvg } from "../../assets/images-desktop/close.svg";
import { ReactComponent as SearchSvg } from "../../assets/images-desktop/search.svg";
import InputIconMobile from "../../components/InputIcon/mobile";
import { WINDOW_SIZE_DESKTOP } from "../../utils";
import { useUser } from "../../providers/user";
import RatingStars from "../../components/RatingStars";
import { mockedProduct } from "../../utils/mocks";
import ProducerCartDesktop from "../../components/Producer_Cart/desktop";
import ProducerCartMobile from "../../components/Producer_Cart/mobile";

const Test = () => {
  const [value, setValue] = useState<string>("");
  const [value2, setValue2] = useState<string>("");
  const [value3, setValue3] = useState<string>("");
  const [value4, setValue4] = useState<string>("");

  const { initController } = useUser();

  const clicked = (): void => {
    const controller = initController();
    controller.getEvaluationsOfUser(1).then((resp) => {
      console.log(resp);
    });
  };

  return (
    <>
      <Button color="green" onClick={clicked}>
        Click me
      </Button>
      <RatingStars />
      <Button color="green">entrar</Button>
      <Button>sair</Button>
      {window.outerWidth > 899 ? (
        <>
          <InputIconDesktop
            styles={{ height: 60 }}
            type="number"
            placeholder="nome"
            icon={CloseSvg}
            value={value}
            setValue={setValue}
          />
          <InputIconDesktop
            styles={{ color: "white", height: 35 }}
            type="text"
            placeholder="buscar"
            icon={SearchSvg}
            action="search"
            value={value2}
            setValue={setValue2}
          />
        </>
      ) : (
        <>
          <InputIconMobile
            styles={{ size: 35 }}
            action="clear"
            placeholder="nome"
            icon={CloseSvg}
            value={value}
            setValue={setValue}
          />
          <InputIconMobile
            styles={{ color: "white", size: 35 }}
            placeholder="buscar"
            icon={SearchSvg}
            action="search"
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
      {window.innerWidth > WINDOW_SIZE_DESKTOP ? (
        <ProductCardInCartHistory scenery="cart" item={mockedProduct} />
      ) : (
        <ProductCardInCartHistoryMobile
          scenery="history"
          item={mockedProduct}
        />
      )}
      <ProducerCartDesktop />
      <ProducerCartMobile />
    </>
  );
};

export default Test;
