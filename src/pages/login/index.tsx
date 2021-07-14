import Mobile from "./mobile";
import Desktop from "./desktop";
import { useWindow } from "../../providers/window";
import { WINDOW_SIZE_DESKTOP } from "../../utils";
import React, { BaseSyntheticEvent } from "react";

const LoginPage = () => {
  const { pageWidth } = useWindow();
  const getBrokenImage = (event: any) => {
    const url = event;
    console.log(url);
  };
  const handleError = (event: any) => {
    if (typeof event === "object") {
      getBrokenImage(event.target.attributes[0].nodeValue);
    }
  };
  const checkImage = (url: string) => {
    const img = document.createElement("img");
    img.src = url;
    img.addEventListener("error", handleError);
    setInterval(() => {
      img.removeEventListener("error", handleError);
    }, 1000);
  };

  checkImage("http://Teste.jpg");

  return <>{pageWidth < WINDOW_SIZE_DESKTOP ? <Mobile /> : <Desktop />}</>;
};

export default LoginPage;
