import Mobile from "./mobile";
import Desktop from "./desktop";

const LoginPage = () => {
  return <>{window.innerWidth < 899 ? <Mobile /> : <Desktop />}</>;
};

export default LoginPage;
