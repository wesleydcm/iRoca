import { Container, Form, Logo } from "./styles";
import LogoImage from "../../../../assets/images-mobile/logo.svg";
import Input from "../../../Input";
import { useState } from "react";
import Button from "../../../Button";

const RegisterStep2Desktop = () => {
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
          <h1>Dados Pessoais</h1>
          <Input
            placeholder={"Nome completo"}
            setValue={setEmail}
            type={"text"}
            value={email}
            width={260}
          />
          <Input
            placeholder={"Data de nascimento"}
            setValue={setEmail}
            type={"text"}
            value={email}
            width={260}
          />
          <Input
            placeholder={"CPF"}
            setValue={setEmail}
            type={"text"}
            value={email}
            width={260}
          />
          <Input
            placeholder={"Telefone de contato"}
            setValue={setEmail}
            type={"text"}
            value={email}
            width={260}
          />
        </div>
        <div className="photo">
          <h1>Foto de Perfil</h1>
          <div className="photo-input">
            <Input
              placeholder={"link"}
              setValue={setEmail}
              type={"text"}
              value={email}
              width={180}
            />
            <span>ou</span>
            <Button width={100} color={"green"} type={"submit"}>
              Upload
            </Button>
          </div>
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

export default RegisterStep2Desktop;
