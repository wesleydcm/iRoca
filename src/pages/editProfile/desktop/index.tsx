import { Container, Form, Box } from "./styles";
import Input from "../../../components/Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { editProfileSchema } from "../../../schemas";
import { IEditProfile } from "../../../@types";
import Button from "../../../components/Button";
import AddImage from "../../../assets/images-mobile/plus.svg";
import { useUser } from "../../../providers/user";
import { ReactComponent as ArrowToBack } from "../../../assets/images-mobile/arrow-to-back.svg";
import { Link } from "react-router-dom";
const EditProfileDesktop = () => {
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(editProfileSchema),
  });
  const { initController, user } = useUser();

  const onSubmit = (data: IEditProfile) => {
    console.log(data);
    const newData = {
      id: user.personalData.id,
      personalData: {
        birthDate: data.birthDate,
        email: data.email,
        name: data.name,
        phone: data.phone,
        adress: {
          street: data.street,
          neighborhood: data.neighborhood,
          complement: data.complement,
          cep: data.cep,
        },
      },
      token: user.token,
    };
    const controller = initController();
    controller.updateUser(newData);
  };

  const toggleModal = () => {};
  const {
    personalData: {
      name,
      birthDate,
      phone,
      email,
      address: { cep, city, street, neighborhood, complement },
    },
  } = user;
  return (
    <Container>
      <Link to="/myaccount">
        <ArrowToBack />
      </Link>
      <h1>Editar dados</h1>
      <figure>
        <img
          src={user.personalData.image}
          alt="Profile"
        />
        <img src={AddImage} alt="AddImage" onClick={toggleModal} />
      </figure>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Box>
          <h2>Informações Pessoais</h2>
          <div>
            <label htmlFor="name">Nome</label>
            <Input
              type="text"
              placeholder="Nome"
              defaultValue={name ? name : ""}
              register={register}
              name="name"
            />
          </div>
          <div>
            <label htmlFor="name">Nascimento</label>
            <Input
              type="text"
              placeholder="Nascimento"
              register={register}
              defaultValue={birthDate ? birthDate : ""}
              name="birthDate"
            />
          </div>
          <div>
            <label htmlFor="phone">Telefone</label>
            <Input
              type="text"
              placeholder="Telefone"
              register={register}
              defaultValue={phone ? phone : ""}
              name="phone"
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <Input
              type="email"
              placeholder="Email"
              defaultValue={email ? email : ""}
              register={register}
              name="email"
            />
          </div>
        </Box>
        <Box>
          <h2>Endereço</h2>
          <div>
            <label htmlFor="cep">CEP</label>
            <Input
              type="text"
              placeholder="CEP"
              register={register}
              name="cep"
              defaultValue={cep ? cep : ""}
            />
          </div>
          <div>
            <label htmlFor="city">Cidade</label>
            <Input
              type="text"
              placeholder="Cidade"
              defaultValue={city ? city : ""}
              register={register}
              name="city"
            />
          </div>
          <div>
            <label htmlFor="neighborhood">Bairro</label>
            <Input
              type="text"
              placeholder="Bairro"
              register={register}
              defaultValue={neighborhood ? neighborhood : ""}
              name="neighborhood"
            />
          </div>
          <div>
            <label htmlFor="street">Rua</label>
            <Input
              type="text"
              placeholder="Rua"
              register={register}
              defaultValue={street ? street : ""}
              name="street"
            />
          </div>
          <div>
            <label htmlFor="complement">Complemento</label>{" "}
            <Input
              type="text"
              placeholder="Complemento"
              defaultValue={complement ? complement : ""}
              register={register}
              name="complement"
            />
          </div>
        </Box>
        <Button type="submit" color="green">
          Salvar
        </Button>
      </Form>
    </Container>
  );
};

export default EditProfileDesktop;
