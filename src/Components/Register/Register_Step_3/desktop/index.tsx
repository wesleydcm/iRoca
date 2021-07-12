import { Container, Form, Logo } from "./styles";
import LogoImage from "../../../../assets/images-mobile/logo.svg";
import Input from "../../../Input";
import Button from "../../../Button";
import { useUser } from "../../../../Providers/user";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

interface FormValues {
  state: string;
  city: string;
  district: string;
  street: string;
  complement?: string;
  cep?: string;
}

const RegisterStep3Desktop = () => {
  const [cepValue, setCepValue] = useState("");

  const [districtInput, setDistrickInput] = useState("");

  const [cityInput, setCityInput] = useState("");

  const [streetInput, setStreetInput] = useState("");

  const [stateInput, setStateInput] = useState("");

  const { user } = useUser();

  const history = useHistory();

  const schema = yup.object().shape({
    state: yup.string().required("Campo obrigatório"),
    city: yup.string().required("Campo obrigatório"),
    district: yup.string().required("Campo obrigatório"),
    street: yup.string().required("Campo obrigatório"),
    complement: yup.string().required("Campo obrigatório"),
    cep: yup.string(),
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
    console.log(data);
    user.personalData.address.state = data.state;
    user.personalData.address.city = data.city;
    user.personalData.address.neighborhood = data.district;
    user.personalData.address.street = data.street;
    user.personalData.address.complement = data.complement;
    user.personalData.address.cep = data.cep;
    reset();
    history.push("/login");
  };

  const handleClick = () => {
    axios.get(`https://viacep.com.br/ws/${cepValue}/json/`).then((response) => {
      setStateInput(response.data.uf);
      setCityInput(response.data.localidade);
      setDistrickInput(response.data.bairro);
      setStreetInput(response.data.logradouro);
    });
  };

  console.log(stateInput);

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
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div className="input">
          <h1>Dados de Endereço</h1>
          <Input
            placeholder={"Estado"}
            type={"text"}
            width={260}
            name={"state"}
            register={register}
            value={stateInput}
          />
          <p>{errors.state?.message}</p>
          <Input
            placeholder={"Cidade"}
            type={"text"}
            width={260}
            name={"city"}
            register={register}
            value={cityInput}
          />
          <p>{errors.city?.message}</p>
          <Input
            placeholder={"Bairro"}
            type={"text"}
            width={260}
            name={"district"}
            register={register}
            value={districtInput}
          />
          <p>{errors.district?.message}</p>
          <Input
            placeholder={"Rua"}
            type={"text"}
            width={260}
            name={"street"}
            register={register}
            value={streetInput}
          />
          <p>{errors.street?.message}</p>
          <Input
            placeholder={"Complemento"}
            type={"text"}
            width={260}
            name={"complement"}
            register={register}
          />
          <p>{errors.complement?.message}</p>
        </div>
        <div className="photo">
          <div className="photo-input">
            {/* <Input
              placeholder={"CEP"}
              type={"text"}
              width={180}
              name={"cep"}
              register={register}
              setValue={setcepValue}
               */}
            <input
              placeholder="CEP"
              type="text"
              {...register("cep")}
              onChange={(e) => setCepValue(e.target.value)}
            />
            <span>ou</span>
            <Button
              width={130}
              color={"green"}
              type={"button"}
              onClick={handleClick}
            >
              Verificar
            </Button>
          </div>
          <p>{errors.cep?.message}</p>
        </div>
        <div className="button">
          <Button width={225} color={"green"} type={"submit"}>
            Finalizar cadastro
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default RegisterStep3Desktop;
