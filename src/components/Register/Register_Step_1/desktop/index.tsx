import { Container, Form, Logo } from "./styles";
import LogoImage from "../../../../assets/images-mobile/logo.svg";
import Input from "../../../Input";
import Button from "../../../Button";
import { useUser } from "../../../../providers/user";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory, Link } from "react-router-dom";

interface FormValue {
  email: string;
  password: string;
}

const Motion = {
  hidden: {
    y: -100,
    opacity: 0,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      delay: 0.2,
      duration: 1,
    },
  },
};

const RegisterStep1Desktop = () => {
  const { tempUser, setTempUser } = useUser();

  const history = useHistory();

  const schema = yup.object().shape({
    email: yup.string().required("Campo obrigatório").email("Email inválido"),
    password: yup
      .string()
      .required("Campo obrigatório")
      .min(6, "Mínimo 6 digitos"),
    emailConfirm: yup
      .string()
      .required("Campo Obrigatório")
      .oneOf([yup.ref("email")], "Email diferente"),
    passwordConfirm: yup
      .string()
      .required("Campo Obrigatório")
      .oneOf([yup.ref("password")], "Senha diferente"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (dataValue: FormValue) => {
    setTempUser({
      ...tempUser,
      email: dataValue.email,
      password: dataValue.password,
    });
    reset();
    history.push("/register-second");
  };

  return (
    <Container variants={Motion} initial="hidden" animate="visible">
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
            width={260}
          />
          <p>{errors.email?.message}</p>
          <Input
            placeholder={"Confirmação de email"}
            type={"text"}
            name={"emailConfirm"}
            width={260}
            register={register}
          />
          <p>{errors.emailConfirm?.message}</p>
          <Input
            placeholder={"Senha"}
            type={"password"}
            width={260}
            name={"password"}
            register={register}
          />
          <p>{errors.email?.message}</p>
          <Input
            placeholder={"Confirmação de senha"}
            type={"password"}
            width={260}
            name={"passwordConfirm"}
            register={register}
          />
          <p>{errors.passwordConfirm?.message}</p>
          <div className="footer">
            <Link to="/login">
              <p>Já possui uma conta ? Entre por aqui!</p>
            </Link>
          </div>
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
