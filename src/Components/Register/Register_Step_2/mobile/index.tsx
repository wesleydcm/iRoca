import { Container, Logo, Form, Footer } from "./styles";
import LogoImage from "../../../../assets/images-mobile/logo.svg";
import Input from "../../../Input";
import Button from "../../../Button";
import { useState } from "react";

const RegisterStep2Mobile = () => {
  const [email, setEmail] = useState("");

  return (
    <Container>
      {/* <Logo>
        <img src={LogoImage} alt="logo" />
        <p>
          Precisamos dos seus dados pra fazer realizar compras e publicar
          anúncios
        </p>
      </Logo>
      <Form>
        <h1>Dados Pessoais</h1>
        <div className="input">
          <Input
            placeholder={"Nome completo"}
            type={"text"}
            color={"white"}
            setValue={setEmail}
            value={email}
            width={310}
          />
          <Input
            placeholder={"Data de nascimento"}
            type={"text"}
            color={"white"}
            setValue={setEmail}
            value={email}
            width={310}
          />
          <Input
            placeholder={"CPF"}
            type={"text"}
            color={"white"}
            setValue={setEmail}
            value={email}
            width={310}
          />
          <Input
            placeholder={"Telefone para contato"}
            type={"text"}
            color={"white"}
            setValue={setEmail}
            value={email}
            width={310}
          />
        </div>
        <div className="photo">
          <h1>Foto de perfil</h1>
          <div className="photo-input">
            <Input
              placeholder={"link"}
              type={"text"}
              color={"white"}
              setValue={setEmail}
              value={email}
              width={150}
            />
            <span>ou</span>
            <Button color={""} type={"button"} width={115}>
              Upload
            </Button>
          </div>
        </div>
        <div className="button">
          <Button color={""} type={"submit"} width={155}>
            Próximo
          </Button>
        </div>
      </Form>
      <Footer>
        <p>Já possui uma conta ? Entre por aqui!</p>
      </Footer> */}
    </Container>
  );
};

export default RegisterStep2Mobile;
