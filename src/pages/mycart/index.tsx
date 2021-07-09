import { WINDOW_SIZE_DESKTOP } from "../../utils/index";
import { useWindow } from "../../Providers/window";
import MenuMobile from "../../Components/Menu/mobile";
import MenuDesktop from "../../Components/Menu/desktop";

const MyCart = () => {

    const { pageWidth } = useWindow();

    if (pageWidth < WINDOW_SIZE_DESKTOP) {
        return (
       
            <MenuMobile></MenuMobile>
        )
    } else {
        return (
       
            <MenuDesktop></MenuDesktop>
        )
    }
    
}

export default MyCart;