import { WINDOW_SIZE_DESKTOP } from "../../utils/index";
import { useWindow } from "../../Providers/window";
import MenuMobile from "../../Components/Menu/mobile";
import MenuDesktop from "../../Components/Menu/desktop";
import { useUser } from "../../Providers/user";
import ProductCardInCartHistoryMobile from "../../Components/ProductCardInCartHistory/mobile";
import ProductCardInCartHistory from "../../Components/ProductCardInCartHistory/desktop";
import { useCart } from "../../Providers/cart";
import { useHistory } from "react-router";
import Button from "../../Components/Button";
import { priceFormatter } from "../../utils/index";
import { Container, Wrapper } from "./styles";

const MyCart = () => {
  const { user } = useUser();
  const { cart } = useCart();

  const history = useHistory();

  const handlePayment = () => {
    if (user.auth === true) {
    } else {
      history.push("/login");
    }
  };

  const subtotal = 10
  const subtotalFormatted = priceFormatter(subtotal);
  const delivery = 10;
  const deliveryFormatted = priceFormatter(delivery);
  const total = subtotalFormatted + deliveryFormatted;

  const { pageWidth } = useWindow();

  if (pageWidth < WINDOW_SIZE_DESKTOP) {
    return (
      <Container>
        <h1>Carrinho</h1>
        {(cart) ? (
          <>
            <ul>
              {cart.map((elem) => (
                <ProductCardInCartHistoryMobile scenery="cart" item={elem} />
              ))}
            </ul>
            <Wrapper>
              <div>
                <h3>Itens: {subtotalFormatted}</h3>
                <h3>Frete: {deliveryFormatted}</h3>
                <h2>Total: {total}</h2>
              </div>
              <Button onClick={handlePayment}>Pagar</Button>
            </Wrapper>
          </>
        ) : (
          <>
            <p>Seu carrinho está vazio. Que tal irmos às compras?</p>
            <span>Deseja voltar aos anúncios? Só clicar aqui.</span>
          </>
        )}
        <MenuMobile />
      </Container>
    );
  } else {
    return (
      <Container>
        <h1>Carrinho</h1>
        {(cart) ? (
          <>
            <ul>
              {cart.map((elem) => (
                <ProductCardInCartHistory scenery="cart" item={elem} />
              ))}
            </ul>
            <Wrapper>
              <div>
                <h3>Itens: {subtotalFormatted}</h3>
                <h3>Frete: {deliveryFormatted}</h3>
                <h2>Total: {total}</h2>
              </div>
              <Button onClick={handlePayment}>Pagar</Button>
            </Wrapper>
          </>
        ) : (
          <>
            <p>Seu carrinho está vazio. Que tal irmos às compras?</p>
            <span>Deseja voltar aos anúncios? Só clicar aqui.</span>
          </>
        )}
        <MenuDesktop />
      </Container>
    );
  }
};

export default MyCart;
