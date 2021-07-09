import RegisterStep2Mobile from "../../../Components/Register/Register_Step_2/mobile";
import RegisterStep2Desktop from "../../../Components/Register/Register_Step_2/desktop";

const Registe2 = () => {
  const viewPort = window.innerWidth;
  console.log(viewPort);

  return (
    <>{viewPort <= 900 ? <RegisterStep2Mobile /> : <RegisterStep2Desktop />}</>
  );
};

export default Registe2;
