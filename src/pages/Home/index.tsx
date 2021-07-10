import HomeMobile from "./mobile";
import HomeDesktop from "./desktop";

const Home = () => {
	return <>{window.innerWidth < 900 ? <HomeMobile /> : <HomeDesktop />}</>;
};

export default Home;
