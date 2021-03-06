import ReactDOM from "react-dom";
import App from "./App";
import { Global } from "./styles/global";
import Providers from "./providers";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
	<Providers>
		<BrowserRouter>
			<ToastContainer
				position="top-right"
				autoClose={2000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss={false}
				draggable
				pauseOnHover={false}
			/>
			{/* Same as */}
			<Global />
			<App />
		</BrowserRouter>
	</Providers>,
	document.getElementById("root"),
);
