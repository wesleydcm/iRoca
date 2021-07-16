import { Container, Form, Box } from "./styles";
import Input from "../../../components/Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { editProfileSchema } from "../../../schemas";
import { IEditProfile } from "../../../@types";
import Button from "../../../components/Button";
import AddImage from "../../../assets/images-mobile/plus.svg";
import { useUser } from "../../../providers/user";

const EditProfileMobile = () => {
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
          <Input
            type="text"
            placeholder="Nome"
            defaultValue={name ? name : ""}
            register={register}
            name="name"
          />
          <Input
            type="text"
            placeholder="Nascimento"
            register={register}
            defaultValue={birthDate ? birthDate : ""}
            name="birthDate"
          />
          <Input
            type="text"
            placeholder="Telefone"
            register={register}
            defaultValue={phone ? phone : ""}
            name="phone"
          />
          <Input
            type="email"
            placeholder="Email"
            defaultValue={email ? email : ""}
            register={register}
            name="email"
          />
        </Box>
        <Box>
          <h2>Endereço</h2>
          <Input
            type="text"
            placeholder="CEP"
            register={register}
            name="cep"
            defaultValue={cep ? cep : ""}
          />
          <Input
            type="text"
            placeholder="Cidade"
            defaultValue={city ? city : ""}
            register={register}
            name="city"
          />
          <Input
            type="text"
            placeholder="Bairro"
            register={register}
            defaultValue={neighborhood ? neighborhood : ""}
            name="neighborhood"
          />
          <Input
            type="text"
            placeholder="Rua"
            register={register}
            defaultValue={street ? street : ""}
            name="street"
          />
          <Input
            type="text"
            placeholder="Complemento"
            defaultValue={complement ? complement : ""}
            register={register}
            name="complement"
          />
        </Box>
        <Button type="submit" color="green">
          Salvar
        </Button>
      </Form>
    </Container>
  );
};

export default EditProfileMobile;
