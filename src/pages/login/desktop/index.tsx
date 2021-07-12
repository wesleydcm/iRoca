import { Container, Header } from "./styles";
import Input from "../../../Components/Input";
import Button from "../../../Components/Button";
import { useForm } from "react-hook-form";
import { ILoginData } from "../../../@types";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../../schemas";
import { useUser } from "../../../Providers/user";
import { Link } from "react-router-dom";
import { ReactComponent as LogoSVGdesktop } from "../../../assets/images-desktop/logo.svg";

const LoginPage = () => {
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const { initController } = useUser();
  const login = (data: ILoginData) => {
    const controller = initController();
    controller.login(data);
  };

  return (
    <Container>
      <Header>
        <div className="container">
          <div>
            <h1>Bem vindo ao iRoça</h1>
            <p>
              Venda seus produtos ou compre de produtores agrícolas de todo o
              Brasil
            </p>
          </div>
          <LogoSVGdesktop />
        </div>
      </Header>
      <form onSubmit={handleSubmit(login)}>
        <div>
          <h2>Entrar</h2>
          <Input
            type="email"
            name="email"
            register={register}
            placeholder="Email"
            data-testid="login"
            color="green"
          />
          <Input
            type="text"
            name="password"
            register={register}
            placeholder="Senha"
            data-testid="password"
            color="green"
          />
          <Button color="green" type="submit">
            Entrar
          </Button>
        </div>
        <Link to="/login">
          Ainda não possui uma conta ? Pode se registrar clicando aqui
        </Link>
      </form>
    </Container>
  );
};

export default LoginPage;