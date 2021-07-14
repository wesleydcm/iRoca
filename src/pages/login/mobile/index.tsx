import { Container } from "./styles";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { useForm } from "react-hook-form";
import { ILoginData } from "../../../@types";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../../schemas";
import { useUser } from "../../../providers/user";
import { Link, useHistory } from "react-router-dom";
import { ReactComponent as LogoSVGmobile } from "../../../assets/images-mobile/logo.svg";
const LoginPage = () => {
	const { register, handleSubmit } = useForm({
		resolver: yupResolver(loginSchema),
	});

	const { initController } = useUser();
  const history = useHistory();

	const login = async (data: ILoginData) => {
		const controller = initController();
		await controller.login(data);
    history.push("/");
	};

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

	return (
		<Container variants={Motion} initial="hidden" animate="visible">
			<LogoSVGmobile />

			<div>
				<h1>Bem vindo ao iRoça</h1>
				<p>
					Venda seus produtos ou compre de produtores agrícolas de todo o Brasil
				</p>
			</div>
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
				<Link to="/register">Não possui conta ? Cadastre-se aqui!</Link>
			</form>
		</Container>
	);
};

export default LoginPage;
