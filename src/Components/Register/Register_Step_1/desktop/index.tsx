import { Container, Form, Logo } from "./styles";
import LogoImage from "../../../../assets/images-mobile/logo.svg";
import Input from "../../../Input";
import { useState } from "react";
import Button from "../../../Button";
import { useUser } from "../../../../Providers/user";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
import { mockedUser1 } from "../../../../utils/mocks";
import { FieldValues } from "react-hook-form";

interface FormValues {
  email: string;
  // password: string;
  // emailConfirm: string;
  // passwordConfirm: string;
}

const RegisterStep1Desktop = () => {
  // const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { user, setUser } = useUser();

  const history = useHistory();

  const schema = yup.object().shape({
    email: yup.string().required("Campo Obrigatório").email("Email inválido"),
    // password: yup
    //   .string()
    //   .required("Campo obrigatório")
    //   .min(6, "Mínimo 6 digitos"),
    // emailConfirm: yup
    //   .string()
    //   .required("Campo Obrigatório")
    //   .oneOf([yup.ref("email")], "Email diferente"),
    // passwordConfirm: yup
    //   .string()
    //   .required("Campo Obrigatório")
    //   .oneOf([yup.ref("password")], "Senha diferente"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    // reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
    // history.push("/register-2");
    // reset();
  };

  const handleEmail = (inputEmail: string) => {
    mockedUser1.personalData.email = inputEmail;
  };

  console.log("email: ", mockedUser1.personalData.email);

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
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div className="input">
          <h1>Registrar</h1>
          <Input
            placeholder={"Email"}
            type={"text"}
            name={"email"}
            register={register}
          />
          <p>{errors.email?.message}</p>
          {/* <Input
            placeholder={"Confirmação de email"}
            type={"text"}
            // value={confirmEmail}
            width={260}
            setValue={setConfirmEmail}
            {...register("emailConfirm")}
          />
          <p>{errors.emailConfirm?.message}</p>
          <Input
            placeholder={"Senha"}
            setValue={setPassword}
            type={"text"}
            // value={password}
            width={260}
            {...register("password")}
          />
          <p>{errors.email?.message}</p>
          <Input
            placeholder={"Confirmação de senha"}
            type={"text"}
            // value={confirmPassword}
            width={260}
            setValue={setConfirmPassword}
            {...register("passwordConfirm")}
          />
          <p>{errors.passwordConfirm?.message}</p> */}
        </div>
        <div className="button">
          <Button width={180} color={"green"} type={"submit"}>
            Próximo
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default RegisterStep1Desktop;
