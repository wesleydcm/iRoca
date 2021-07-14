import { Container, Form, Box } from "./styles";
import Input from "../../Components/Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { editProfileSchema } from "../../schemas";
import { IEditProfile } from "../../@types";
import Button from "../../Components/Button";
import AddImage from "../../assets/images-mobile/plus.svg";
import { useUser } from "../../Providers/user";

const EditProfileComponent = () => {
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
      <h1>Minha Conta</h1>
      <figure>
        <img
          src="data:image/jpeg;base64,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"
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

export default EditProfileComponent;
