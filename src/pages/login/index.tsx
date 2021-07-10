import Mobile from "./mobile";
import Desktop from "./desktop";

const LoginPage = () => {
  return <>{window.innerWidth < 900 ? <Mobile /> : <Desktop />}</>;
};

export default LoginPage;
