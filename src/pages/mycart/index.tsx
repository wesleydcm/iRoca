import { WINDOW_SIZE_DESKTOP } from "../../utils/index";
import { useWindow } from "../../Providers/window";
import MenuMobile from "../../Components/Menu/mobile";
import MenuDesktop from "../../Components/Menu/desktop";
import { useUser } from "../../Providers/user";
import ProductCardInCartHistoryMobile from "../../Components/ProductCardInCartHistory/mobile";
import ProductCardInCartHistory from "../../Components/ProductCardInCartHistory/desktop";
import { useCart } from "../../Providers/cart";
import Button from "../../Components/Button";
import { priceFormatter } from "../../utils/index";
import { Container, Wrapper } from "./styles";
import { NavLink, useHistory } from "react-router-dom";
import { IProduct, IPurchase, IUserInfo, IProductUpdate } from "../../@types";
import { useEffect, useState } from "react";

const MyCart = () => {
  const { user, initController } = useUser();
  const { cart, setCart } = useCart();

  const [products, setProducts] = useState<IProduct[]>([])  
  const [notAllowedPurchase, setNotAllowedPurchase] = useState<IProduct[]>([])

  const controller = initController();
  controller.getProduct().then((response) => setProducts(response));

  const history = useHistory();

  const subtotal = parseFloat(
    cart.reduce((product, acc) => acc.price + product, 0).toFixed(2)
  );
  const subtotalFormatted = priceFormatter(subtotal);
  const delivery = 2;
  const deliveryFormatted = priceFormatter(delivery);
  const total = subtotal + delivery;
  const totalFormatted = priceFormatter(total);
 
  const x:IProduct[] = [];
  const y:IProduct[] = [];

  const checkStock = (): boolean => {
    const checkCart = (cart: IProduct): void => {
      const stockProduct: any = products.find(
        (product: IProduct) => product.id === cart.id
      ); 
      if (stockProduct && stockProduct.qty >= cart.qty) {
        x.push(stockProduct)

      } else if (stockProduct && stockProduct.qty < cart.qty) {
        y.push(stockProduct)
      }
    };
    cart.forEach(checkCart);
 
    return y.length === 0;
  };

  useEffect(() => {
      setNotAllowedPurchase(y);
  },[y.length])

  const updateStock = (): void => {
    const checkCart = (item: IProduct, index: number) => {
      const findedProduct: any = products.find(
        (product: IProduct) => product.id === item.id
      );
      let newQty: number = 0;
      newQty = findedProduct.qty - item.qty;
      const updatedProduct: IProductUpdate = { qty: newQty };
      controller.updateStock(findedProduct.id, updatedProduct, user.token);
    };
    cart.forEach(checkCart);
  };

  const handlePayment = () => {
    if (user !== null) {
      const check = checkStock();
      if (check === true) {
        updateStock();

        const myId: number = user.personalData.id;
        const date: string = new Date().toDateString();
        const productPurchaseId: number = cart[0].id;
        let seller: IUserInfo = {} as IUserInfo;

        controller.getSellerOfProduct(productPurchaseId).then((response) => {
          seller = response;
          const purchase: IPurchase = {
            userId: myId,
            sellerId: seller.id,
            date: date,
            subtotal: subtotal,
            delivery: delivery,
            total: total,
            isReceived: false,
            products: cart,
          };

          controller.createPurchase(user.token, purchase);
         // setCart([]);
          //history.push("/home");
        });
      } else {
          
      }
    } else {
      history.push("/login");
    }
  };

  const { pageWidth } = useWindow();

  if (pageWidth < WINDOW_SIZE_DESKTOP) {
    return (
      <Container>
        <h1>Carrinho</h1>
        {cart.length ? (
          <>
            <ul>
              {cart.map((elem) => (
                <ProductCardInCartHistoryMobile scenery="cart" key={elem.id} item={elem} />
              ))}
            </ul>
            <Wrapper>
              <div>
                <h3>Itens: {subtotalFormatted}</h3>
                <h3>Frete: {deliveryFormatted}</h3>
                <h2>Total: {totalFormatted}</h2>
              </div>
              <Button onClick={handlePayment} color="green">
                Pagar
              </Button>
            </Wrapper>
          </>
        ) : (
          <>
            <p>Seu carrinho está vazio. Que tal irmos às compras?</p>
            <NavLink to="/home">
              <span>Deseja voltar aos anúncios? Só clicar aqui.</span>
            </NavLink>
          </>
        )}
        <MenuMobile />
      </Container>
    );
  } else {
    return (
      <Container>
        <h1>Carrinho</h1>
        {cart.length ? (
          <>
            <ul>
              {cart.map((elem) => (
                <ProductCardInCartHistory scenery="cart" key={elem.id} item={elem} />
              ))}
            </ul>
            <Wrapper>
              <div>
                <h3>Itens: {subtotalFormatted}</h3>
                <h3>Frete: {deliveryFormatted}</h3>
                <h2>Total: {totalFormatted}</h2>
              </div>
              <Button onClick={handlePayment} color="green">
                Pagar
              </Button>
            </Wrapper>
          </>
        ) : (
          <>
            <p>Seu carrinho está vazio. Que tal irmos às compras?</p>
            <NavLink to="/home">
              <span>Deseja voltar aos anúncios? Só clicar aqui.</span>
            </NavLink>
          </>
        )}
        <MenuDesktop />
      </Container>
    );
  }
};

export default MyCart;

