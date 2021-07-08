import React from "react";
import Button from "./Components/Button";
import { ReactComponent as IrocaLogo } from "./assets/images-mobile/logo.svg";
import RatingStar from "./Components/reviews-stars";
const App: React.FC = () => {
  return (
    <>
      <IrocaLogo />
      <Button type="button" color="green" value="entrar" />
      <Button type="button" value="sair" />
    </>
  );
};

export default App;
