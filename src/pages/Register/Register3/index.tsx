import RegisterStep3Mobile from "../../../components/Register/Register_Step_3/mobile";
import RegisterStep3Desktop from "../../../components/Register/Register_Step_3/desktop";

const Registe3 = () => {
  const viewPort = window.innerWidth;

  return (
    <>{viewPort <= 900 ? <RegisterStep3Mobile /> : <RegisterStep3Desktop />}</>
  );
};

export default Registe3;
