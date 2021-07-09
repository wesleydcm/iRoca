import { Container, Form, Logo } from "./styles";
import LogoImage from "../../../../assets/images-mobile/logo.svg";
import Input from "../../../Input";
import { useState } from "react";
import Button from "../../../Button";

const RegisterStep3Desktop = () => {
  const [email, setEmail] = useState("");
  return (
    <Container>
      <Logo>
        <div className="description">
          <h1>Bem vindo ao iRoça</h1>
          <p>
            Que legal! Agora queremos saber mais sobre você, por favor informe
            seus dados para concluir o seu cadastro
          </p>
        </div>
        <div className="image">
          <img src={LogoImage} alt="logo" />
        </div>
      </Logo>
      <Form>
        <div className="input">
          <h1>Dados de Endereço</h1>
          <Input
            placeholder={"Estado"}
            setValue={setEmail}
            type={"text"}
            value={email}
            width={260}
          />
          <Input
            placeholder={"Cidade"}
            setValue={setEmail}
            type={"text"}
            value={email}
            width={260}
          />
          <Input
            placeholder={"Bairro"}
            setValue={setEmail}
            type={"text"}
            value={email}
            width={260}
          />
          <Input
            placeholder={"Rua"}
            setValue={setEmail}
            type={"text"}
            value={email}
            width={260}
          />
          <Input
            placeholder={"Complemento"}
            setValue={setEmail}
            type={"text"}
            value={email}
            width={260}
          />
        </div>
        <div className="photo">
          <div className="photo-input">
            <Input
              placeholder={"CEP"}
              setValue={setEmail}
              type={"text"}
              value={email}
              width={180}
            />
            <span>ou</span>
            <Button width={130} color={"green"} type={"button"}>
              Verificar
            </Button>
          </div>
        </div>
        <div className="button">
          {" "}
          <Button width={225} color={"green"} type={"submit"}>
            Finalizar cadastro
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default RegisterStep3Desktop;
