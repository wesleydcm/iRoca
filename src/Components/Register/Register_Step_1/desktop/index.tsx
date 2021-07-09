import { Container, Form, Logo } from "./styles";
import LogoImage from "../../../../assets/images-mobile/logo.svg";
import Input from "../../../Input";
import { useState } from "react";
import Button from "../../../Button";

const RegisterStep1Desktop = () => {
  const [email, setEmail] = useState("");
  return (
    <Container>
      <Logo>
        <div className="description">
          <h1>Bem vindo ao iRoça</h1>
          <p>
            Vamos começar com o seu cadastro ! Por favor informe seus dados que
            vão ser usados para acessar a sua conta posteriormente
          </p>
        </div>
        <div className="image">
          <img src={LogoImage} alt="logo" />
        </div>
      </Logo>
      <Form>
        <div className="input">
          <h1>Registrar</h1>
          <Input
            placeholder={"Email"}
            setValue={setEmail}
            type={"text"}
            value={email}
            width={260}
          />
          <Input
            placeholder={"Confirmação de email"}
            setValue={setEmail}
            type={"text"}
            value={email}
            width={260}
          />
          <Input
            placeholder={"Senha"}
            setValue={setEmail}
            type={"text"}
            value={email}
            width={260}
          />
          <Input
            placeholder={"Confirmação de senha"}
            setValue={setEmail}
            type={"text"}
            value={email}
            width={260}
          />
        </div>
        <div className="button">
          {" "}
          <Button width={180} color={"green"} type={"submit"}>
            Próximo
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default RegisterStep1Desktop;
