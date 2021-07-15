import { Container, Form, Logo } from "./styles";
import LogoImage from "../../../../assets/images-mobile/logo.svg";
import Input from "../../../Input";
import Button from "../../../Button";
import { useUser } from "../../../../providers/user";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";

interface FormValues {
  name: string;
  birthDate: string;
  cpf: string;
  phone: string;
  image?: string;
}

const Motion = {
  hidden: {
    x: "100vw",
    opacity: 0,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "tween",
      delay: 0.2,
      duration: 1,
    },
  },
};

const RegisterStep2Desktop = () => {
  const { tempUser, setTempUser } = useUser();

  const history = useHistory();

  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    birthDate: yup
      .string()
      .required("Campo obrigatório")
      .min(10, "Formato inválido, exemplo: xx/xx/xxxx"),
    cpf: yup
      .string()
      .required("Campo obrigatório")
      .min(12, "CPF inválido, exemplo: xxxxxxxxx-xx"),
    phone: yup.string().required("Campo obrigatório"),
    image: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormValues) => {
    setTempUser({
      ...tempUser,
      name: data.name,
      birthDate: data.birthDate,
      cpf: data.cpf,
      phone: data.phone,
      image: data.image,
    });

    if (tempUser.image === "") {
      tempUser.image = "https://i.imgur.com/ac5JjOM.png";
    }

    reset();
    history.push("/register-third");
  };

  return (
    <Container>
      <Logo>
        <div className="description">
          <h1>Bem vindo ao iRoça</h1>
          <p>
            Precisamos dos seus dados pra fazer realizar compras ou publicar
            anúncios
          </p>
        </div>
        <div className="image">
          <img src={LogoImage} alt="logo" />
        </div>
      </Logo>
      <Form
        onSubmit={handleSubmit(onSubmit)}
        variants={Motion}
        initial="hidden"
        animate="visible"
      >
        <div className="input">
          <h1>Dados Pessoais</h1>
          <Input
            placeholder={"Nome completo"}
            type={"text"}
            width={260}
            name={"name"}
            register={register}
          />
          <p>{errors.fullName?.message}</p>
          <Input
            placeholder={"Data de nascimento"}
            type={"text"}
            width={260}
            name={"birthDate"}
            register={register}
          />
          <p>{errors.birthDate?.message}</p>
          <Input
            placeholder={"CPF"}
            type={"text"}
            width={260}
            name={"cpf"}
            register={register}
          />
          <p>{errors.cpf?.message}</p>
          <Input
            placeholder={"Telefone de contato"}
            type={"text"}
            width={260}
            name={"phone"}
            register={register}
          />
          <p>{errors.phone?.message}</p>
        </div>
        <div className="photo">
          <h1>Foto de Perfil</h1>
          <div className="photo-input">
            <Input
              placeholder={"link"}
              type={"text"}
              width={260}
              name={"image"}
              register={register}
            />
            <p>{errors.photo?.message}</p>
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
