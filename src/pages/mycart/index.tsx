import { WINDOW_SIZE_DESKTOP } from "../../utils/index";
import { useWindow } from "../../Providers/window";
import MenuMobile from "../../Components/Menu/mobile";
import MenuDesktop from "../../Components/Menu/desktop";
import { useUser } from "../../Providers/user";

const MyCart = (): JSX.Element => {

    const {user, initController, setUser} = useUser();

    const { pageWidth } = useWindow();

    if (pageWidth < WINDOW_SIZE_DESKTOP) {
        return (
            <>
            <h1>Carrinho</h1>
            {user.auth === true ? (""): (
                <>
                <p>Seu carrinho está vazio. Que tal irmos às compras?</p>
                <span>Deseja voltar aos anúncios? Só clicar aqui.</span>
                </>
            )}
            <MenuMobile />
            </>
        )
    } else {
        return (
            <>
            <h1>Carrinho</h1>
            {user.auth === true ? (""): (
                <>
                <p>Seu carrinho está vazio. Que tal irmos às compras?</p>
                <span>Deseja voltar aos anúncios? Só clicar aqui.</span>
                </>
            )}
            <MenuDesktop />
            </>
        )
    }
    
}

export default MyCart;