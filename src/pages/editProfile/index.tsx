import EditProfileMobile from "./mobile";
import EditProfileDesktop from "./desktop";
import { WINDOW_SIZE_DESKTOP } from "../../utils";

const EditProfile = () => {
  return (
    <>
      {window.innerWidth < WINDOW_SIZE_DESKTOP ? (
        <EditProfileMobile />
      ) : (
        <EditProfileDesktop />
      )}
    </>
  );
};

export default EditProfile;
