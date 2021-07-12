import MyAccountPageMobile from "./mobile";
import MyAccountPageDesktop from "./desktop";

const MyAccountPageComponent = () => {
  return window.innerWidth < 900 ? (
    <MyAccountPageMobile />
  ) : (
    <MyAccountPageDesktop />
  );
};

export default MyAccountPageComponent;
