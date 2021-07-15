import { CART_LOCALSTORAGE_FLAG, WINDOW_SIZE_DESKTOP } from "../../utils/index";
import { useWindow } from "../../providers/window";
import { useUser } from "../../providers/user";
import ProductCardInCartHistoryMobile from "../../components/ProductCardInCartHistory/mobile";
import ProductCardInCartHistory from "../../components/ProductCardInCartHistory/desktop";
import { useCart } from "../../providers/cart";
import Button from "../../components/Button";
import { priceFormatter } from "../../utils/index";
import { Container, Wrapper } from "./styles";
import { NavLink, useHistory } from "react-router-dom";
import {
  IProduct,
  IUserInfo,
  IProductUpdatePurchase,
  INewPurchase,
  IProuctCart,
} from "../../@types";
import { useEffect, useState } from "react";
import Modal from "./Modal/modal"; 

const MyCart = () => {
  const { user, initController } = useUser();
  const { cart } = useCart();
  
  const [checkUser, setCheckUser] = useState<boolean>(false);
  const [products, setProducts] = useState<IProduct[]>([]);
  const [notAllowedPurchase, setNotAllowedPurchase] = useState<IProduct[]>([]);
  const [shippingValue, setShippingValue] = useState<number>(0);

  const [openModal, setOpenModal] = useState<boolean>(false);

  const toggleModal = () => {
    setOpenModal(!openModal);
  };

  const controller = initController();

  useEffect(() => {
    controller.getProduct().then((response) => setProducts(response));
    //eslint-disable-next-line
  }, [products.length]);

  const history = useHistory();

  const calcShipping = (): void => {
    if (user !== null && cart.length > 0) {
      const subtotalQty = parseFloat(
        cart.reduce((acc, product) => acc + product.product.qty, 0).toFixed(2)
      );
      const productPurchaseId: number = cart[0].product.id;
      let seller: IUserInfo = {} as IUserInfo;
      controller.getSellerOfProduct(productPurchaseId).then((response) => {
        seller = response;
        if (
          user.personalData.address.state === seller.address.state &&
          subtotalQty >= 50
        ) {
          setShippingValue(0);
        } else if (
          user.personalData.address.state === seller.address.state &&
          subtotalQty < 50
        ) {
          setShippingValue(20);
        } else if (
          user.personalData.address.state !== seller.address.state &&
          subtotalQty >= 50
        ) {
          setShippingValue(100);
        } else if (
          user.personalData.address.state !== seller.address.state &&
          subtotalQty < 50
        ) {
          setShippingValue(50);
        }
      });
    }
  };

  useEffect(() => {
    calcShipping();
    //eslint-disable-next-line
  }, [cart]);

  const subtotal = parseFloat(
    cart.reduce((acc, product) => acc + product.totalPrice, 0).toFixed(2)
  );
  const subtotalFormatted = priceFormatter(subtotal);

  const delivery = shippingValue;
  const deliveryFormatted = priceFormatter(delivery);
  const total = subtotal + delivery;
  const totalFormatted = priceFormatter(total);

  const noStock: IProduct[] = [];

  const checkStock = (): boolean => {

    const checkCart = (cart: IProuctCart): void => {
      const stockProduct: any = products.find(
        (product: IProduct) => product.id === cart.product.id
      );
      if (stockProduct && stockProduct.qty < cart.product.qty) {
        noStock.push(stockProduct);
      }
    };
    cart.forEach(checkCart);
    return noStock.length === 0;
  };

  useEffect(() => {
    setNotAllowedPurchase(noStock);
    //eslint-disable-next-line
  }, [checkStock()]);

  const updateStock = (): void => {
    const checkCart = (item: IProuctCart, index: number) => {
      const findedProduct: any = products.find(
        (product: IProduct) => product.id === item.product.id
      );
      let newQty: number = 0;
      newQty = findedProduct.qty - item.product.qty;
      const updatedProduct: IProductUpdatePurchase = { qty: newQty };
      controller.updateStock(findedProduct.id, updatedProduct, user.token);
    };
    cart.forEach(checkCart);
  };

  const handlePayment = () => {
    if (user !== null && user.auth) {
      const check = checkStock();
      if (check === true) {
        const myId: number = user.personalData.id;
        const date: string = new Date().toDateString();
        const productPurchaseId: number = cart[0].product.id;
        let seller: IUserInfo = {} as IUserInfo;

        controller.getSellerOfProduct(productPurchaseId).then((response) => {
          seller = response;
          const purchase: INewPurchase = {
            userId: myId,
            sellerId: seller.id,
            date: date,
            subtotal: subtotal,
            delivery: delivery,
            total: total,
            isReceived: false,
            products: cart.map((elem) => elem.product),
          };

          if (purchase.userId !== purchase.sellerId) {
            updateStock();
            controller.createPurchase(user.token, purchase);
            setCheckUser(true)
            localStorage.removeItem(CART_LOCALSTORAGE_FLAG);
            toggleModal();
          } else {
            localStorage.removeItem(CART_LOCALSTORAGE_FLAG);
            toggleModal();
          }
        });
      } else {
        toggleModal();
        localStorage.removeItem(CART_LOCALSTORAGE_FLAG);
      }
    } else {
      history.push("/login");
    }
  };

  const { pageWidth } = useWindow();

  if (pageWidth < WINDOW_SIZE_DESKTOP) {
    return (
      <Container>
        {openModal === true && (
        <Modal
          product={notAllowedPurchase}
          toggleModal={toggleModal}
          checkUser={checkUser}
        />
      )}
        <h1>Carrinho</h1>
        {cart.length > 0 ? (
          <>
            <ul className="scroll">
              {cart.map((elem) => (
                <ProductCardInCartHistoryMobile
                  scenery="cart"
                  key={elem.product.id}
                  item={elem.product}
                />
              ))}
            </ul>
            <Wrapper>
              <div>
                <h3>Itens: {subtotalFormatted}</h3>
                {user ? (
                  <h3>Frete: {deliveryFormatted}</h3>
                ) : (
                  <h3>
                    Frete: será calculado quando você entrar na sua conta.
                  </h3>
                )}
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
            <NavLink to="/">
              <span>Deseja voltar aos anúncios? Só clicar aqui.</span>
            </NavLink>
          </>
        )}
      </Container>
    );
  } else {
    return (
      <Container>
        {openModal === true && (
        <Modal
          product={notAllowedPurchase}
          toggleModal={toggleModal}
          checkUser={checkUser}
        />
        )}
        <h1>Carrinho</h1>
        {cart.length ? (
          <>
            <ul className="scroll">
              {cart.map((elem) => (
                <ProductCardInCartHistory
                  scenery="cart"
                  key={elem.product.id}
                  item={elem.product}
                />
              ))}
            </ul>
            <Wrapper>
              <div>
                <h3>Itens: {subtotalFormatted}</h3>
                {user ? (
                  <h3>Frete: {deliveryFormatted}</h3>
                ) : (
                  <h3>
                    Frete: será calculado quando você entrar na sua conta.
                  </h3>
                )}
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
            <NavLink to="/">
              <span>Deseja voltar aos anúncios? Só clicar aqui.</span>
            </NavLink>
          </>
        )}
      </Container>
    );
  }
};

export default MyCart;
