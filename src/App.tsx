import React from "react";
import { ReactComponent as ReactLogo } from "./assets/images/cart.svg";
import { useUser } from "./Providers/user";

const userData = {
  email: "oibino11@gmail.com",
  password: "Aaaa1!",
};
const App = () => {
  const { createLocalUser } = useUser();

  const clicked = (): void => {
    const localUser = createLocalUser(undefined);
    localUser.getEvaluations(1).then((response) => console.log(response));
  };

  return (
    <>
      <button onClick={() => clicked()}>ME CLIQUE</button>
    </>
  );
};

export default App;
