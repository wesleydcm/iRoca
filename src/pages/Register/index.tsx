import RegisterStep1Mobile from "../../Components/Register/Register_Step_1/mobile";
import RegisterStep1Desktop from "../../Components/Register/Register_Step_1/desktop";

const Register = () => {
  const viewPort = window.innerWidth;
  console.log(viewPort);

  return (
    <>{viewPort <= 900 ? <RegisterStep1Mobile /> : <RegisterStep1Desktop />}</>
  );
};

export default Register;
