import { Container, Logo, Descrition, Form, Footer } from "./styles";
import LogoImage from "../../../../assets/images-mobile/logo.svg";
import Input from "../../../Input";
import Button from "../../../Button";
import { useState } from "react";

const RegisterStep1Mobile = () => {
  const [email, setEmail] = useState("");

  return (
    <Container>
      {/* <Logo>
        <h1>Bem vindo ao iRoça</h1>
        <img src={LogoImage} alt="logo" />
      </Logo>
      <Descrition>
        <p>
          Vamos começar com o seu cadastro ! Por favor informe seus dados que
          vão ser usados para acessar a sua conta posteriormente
        </p>
      </Descrition>
      <Form>
        <div className="input">
          <Input
            placeholder={"Email"}
            type={"text"}
            color={"white"}
            setValue={setEmail}
            value={email}
            width={250}
          />
          <Input
            placeholder={"Confirmação de email"}
            type={"text"}
            color={"white"}
            // setValue={setEmail}
            value={email}
            width={250}
          />
          <Input
            placeholder={"Senha"}
            type={"text"}
            color={"white"}
            // setValue={setEmail}
            value={email}
            width={250}
          />
          <Input
            placeholder={"Confirmação de senha"}
            type={"text"}
            color={"white"}
            // setValue={setEmail}
            value={email}
            width={250}
          />
        </div>

        <Button color={""} type={"submit"} width={155}>
          Próximo
        </Button>
      </Form>
      <Footer>
        <p>Já possui uma conta ? Entre por aqui!</p>
      </Footer> */}
    </Container>
  );
};

export default RegisterStep1Mobile;
