import RegisterStep3Mobile from "../../../Components/Register/Register_Step_3/mobile";
import RegisterStep3Desktop from "../../../Components/Register/Register_Step_3/desktop";

const Registe3 = () => {
  const viewPort = window.innerWidth;
  console.log(viewPort);

  return (
    <>{viewPort <= 900 ? <RegisterStep3Mobile /> : <RegisterStep3Desktop />}</>
  );
};

export default Registe3;
