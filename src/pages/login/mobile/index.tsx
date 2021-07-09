import { Container } from "./styles";
import Input from "../../../Components/Input";
import Button from "../../../Components/Button";
import { useForm } from "react-hook-form";
import { ILoginData } from "../../../@types";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../../schemas";
import { useUser } from "../../../Providers/user";
import { ReactComponent as LogoSVG } from "../../../assets/images-mobile/logo.svg";
import { Link } from "react-router-dom";
const LoginPage = () => {
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const { initController } = useUser();
  const login = (data: ILoginData) => {
    console.log(data);
    const controller = initController();
    controller.login(data);
  };

  return (
    <Container>
      <LogoSVG className="logo" />
      <h1>Bem vindo ao iRoça</h1>
      <p>
        Venda seus produtos ou compre de produtores agrícolas de todo o Brasil
      </p>
      <form onSubmit={handleSubmit(login)}>
        <Input
          type="email"
          name="email"
          register={register}
          placeholder="Email"
          data-testid="login"
          color="white"
        />
        <Input
          type="text"
          name="password"
          register={register}
          placeholder="Senha"
          data-testid="password"
          color="white"
        />
        <Button type="submit">Entrar</Button>
        <Link to="/login">Não possui conta ? Cadastre-se aqui!</Link>
      </form>
    </Container>
  );
};

export default LoginPage;
