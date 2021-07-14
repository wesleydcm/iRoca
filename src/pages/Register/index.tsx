import RegisterStep1Mobile from "../../components/Register/Register_Step_1/mobile";
import RegisterStep1Desktop from "../../components/Register/Register_Step_1/desktop";

const Register = () => {
  const viewPort = window.innerWidth;

  return (
    <>{viewPort <= 900 ? <RegisterStep1Mobile /> : <RegisterStep1Desktop />}</>
  );
};

export default Register;
