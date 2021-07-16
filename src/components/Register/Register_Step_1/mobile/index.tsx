import { Container, Logo, Descrition, Form, Footer } from "./styles";
import LogoImage from "../../../../assets/images-mobile/logo.svg";
import Input from "../../../Input";
import Button from "../../../Button";
import { useUser } from "../../../../providers/user";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory, Link } from "react-router-dom";
import { motion } from "framer-motion";

interface FormValue {
  email: string;
  password: string;
}

const Motion = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.5,
    },
  },
};

const RegisterStep1Mobile = () => {
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
    <Container>
      <motion.div variants={Motion} initial="hidden" animate="visible">
        <Logo>
          <h1>Bem vindo ao iRoça</h1>
          <img src={LogoImage} alt="logo" />
        </Logo>
        <Descrition>
          <p>
            Vamos começar com o seu cadastro! Por favor informe seus dados que
            vão ser usados para acessar a sua conta posteriormente
          </p>
        </Descrition>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <div className="input">
            <Input
              placeholder={"Email"}
              type={"text"}
              color={"white"}
              register={register}
              name={"email"}
              width={250}
            />
            <p>{errors.email?.message}</p>
            <Input
              placeholder={"Confirmação de email"}
              type={"text"}
              color={"green"}
              register={register}
              name={"emailConfirm"}
              width={250}
            />
            <p>{errors.emailConfirm?.message}</p>
            <Input
              placeholder={"Senha"}
              type={"password"}
              color={"white"}
              register={register}
              name={"password"}
              width={250}
            />
            <p>{errors.email?.message}</p>
            <Input
              placeholder={"Confirmação de senha"}
              type={"password"}
              color={"white"}
              register={register}
              name={"passwordConfirm"}
              width={250}
            />
            <p>{errors.passwordConfirm?.message}</p>
          </div>

          <Button type={"submit"} width={155}>
            Próximo
          </Button>
        </Form>
        <Footer>
          <Link to="/login">
            <p>Já possui uma conta ? Entre por aqui!</p>
          </Link>
        </Footer>
      </motion.div>
    </Container>
  );
};

export default RegisterStep1Mobile;
