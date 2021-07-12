import Mobile from "./mobile";
import Desktop from "./desktop";
import { useWindow } from "../../Providers/window";
import { WINDOW_SIZE_DESKTOP } from "../../utils";

const LoginPage = () => {
	const { pageWidth } = useWindow();
	return <>{pageWidth < WINDOW_SIZE_DESKTOP ? <Mobile /> : <Desktop />}</>;
};

export default LoginPage;
