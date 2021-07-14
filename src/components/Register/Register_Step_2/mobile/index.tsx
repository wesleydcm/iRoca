import { Container, Logo, Form } from "./styles";
import LogoImage from "../../../../assets/images-mobile/logo.svg";
import Input from "../../../Input";
import Button from "../../../Button";
import { useUser } from "../../../../providers/user";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";

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
      duration: 0.7,
    },
  },
};

const RegisterStep2Mobile = () => {
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
    reset();
    history.push("/register-third");
  };

  return (
    <Container>
      <motion.div variants={Motion} initial="hidden" animate="visible">
        <Logo>
          <img src={LogoImage} alt="logo" />
          <p>
            Precisamos dos seus dados pra fazer realizar compras e publicar
            anúncios
          </p>
        </Logo>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <h1>Dados Pessoais</h1>
          <div className="input">
            <Input
              placeholder={"Nome completo"}
              type={"text"}
              color={"white"}
              name={"name"}
              register={register}
              width={310}
            />
            <p>{errors.fullName?.message}</p>
            <Input
              placeholder={"Data de nascimento"}
              type={"text"}
              color={"white"}
              name={"birthDate"}
              register={register}
              width={310}
            />
            <p>{errors.birthDate?.message}</p>
            <Input
              placeholder={"CPF"}
              type={"text"}
              color={"white"}
              name={"cpf"}
              register={register}
              width={310}
            />
            <p>{errors.cpf?.message}</p>
            <Input
              placeholder={"Telefone para contato"}
              type={"text"}
              color={"white"}
              name={"phone"}
              register={register}
              width={310}
            />
            <p>{errors.phone?.message}</p>
          </div>
          <div className="photo">
            <h1>Foto de perfil</h1>
            <div className="photo-input">
              <Input
                placeholder={"link"}
                type={"text"}
                color={"white"}
                name={"image"}
                register={register}
                width={150}
              />
              <p>{errors.photo?.message}</p>
            </div>
          </div>
          <div className="button">
            <Button type={"submit"} width={155}>
              Próximo
            </Button>
          </div>
        </Form>
      </motion.div>
    </Container>
  );
};

export default RegisterStep2Mobile;
