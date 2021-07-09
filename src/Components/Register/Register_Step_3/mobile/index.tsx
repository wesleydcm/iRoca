import { Container, Logo, Form, Footer } from "./styles";
import LogoImage from "../../../../assets/images-mobile/logo.svg";
import Input from "../../../Input";
import Button from "../../../Button";
import { useState } from "react";

const RegisterStep2Mobile = () => {
  const [email, setEmail] = useState("");

  return (
    <Container>
      <Logo>
        <img src={LogoImage} alt="logo" />
        <p>
          Que legal! Agora queremos saber mais sobre você, por favor informe
          seus dados para concluir o seu cadastro
        </p>
      </Logo>
      <Form>
        <h1>Dados de endereço</h1>
        <div className="cep">
          <Input
            placeholder={"CEP"}
            type={"text"}
            color={"white"}
            setValue={setEmail}
            value={email}
            width={150}
          />
          <Button color={""} type={"button"} width={115}>
            Verificar
          </Button>
        </div>
        <div className="input">
          <Input
            placeholder={"Estado"}
            type={"text"}
            color={"white"}
            setValue={setEmail}
            value={email}
            width={310}
          />
          <Input
            placeholder={"Cidade"}
            type={"text"}
            color={"white"}
            setValue={setEmail}
            value={email}
            width={310}
          />
          <Input
            placeholder={"Bairro"}
            type={"text"}
            color={"white"}
            setValue={setEmail}
            value={email}
            width={310}
          />
          <Input
            placeholder={"Rua"}
            type={"text"}
            color={"white"}
            setValue={setEmail}
            value={email}
            width={310}
          />
          <Input
            placeholder={"Complemento"}
            type={"text"}
            color={"white"}
            setValue={setEmail}
            value={email}
            width={310}
          />
        </div>
        <div className="button">
          <Button color={""} type={"submit"} width={230}>
            Finalizar cadastro
          </Button>
        </div>
      </Form>
      <Footer>
        <p>Já possui uma conta ? Entre por aqui!</p>
      </Footer>
    </Container>
  );
};

export default RegisterStep2Mobile;
