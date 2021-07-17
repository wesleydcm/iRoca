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
import { IProduct, IPurchase } from "../../@types";
import { useEffect, useMemo, useState } from "react";
import Modal from "./Modal/modal";

const MyCart = () => {
	const { user, initController } = useUser();
	const { cart } = useCart();

	const [checkUser, setCheckUser] = useState<boolean>(false);
	const [productsList, setProductsList] = useState<IProduct[]>([]);
	const [notAllowedPurchase, setNotAllowedPurchase] = useState<IProduct[]>([]);
	const [shippingValue, setShippingValue] = useState<number>(0);

	const [openModal, setOpenModal] = useState<boolean>(false);

	const toggleModal = () => {
		setOpenModal(!openModal);
	};

	const controller = initController();
	const productSeller = useMemo(async () => {
		if (cart && cart.productsList && cart.productsList[0])
			return await controller.getProductSeller(cart.productsList[0].id);
		return undefined;
		//eslint-disable-next-line
	}, [cart]);

	useEffect(() => {
		controller.getProduct().then(response => setProductsList(response));
		//eslint-disable-next-line
	}, [productsList.length]);

	const history = useHistory();

	useEffect(() => {
		if (user && user.auth && cart?.productsList?.length) {
			const subtotalQty = parseFloat(
				cart.productsList
					.reduce((acc, product) => {
						return acc + product.qty;
					}, 0)
					.toFixed(2),
			);

			if (checkStock()) {
				productSeller.then(seller => {
					if (seller)
						if (user.personalData.address.state === seller.address.state) {
							if (subtotalQty >= 50) {
								setShippingValue(0);
							} else {
								setShippingValue(20);
							}
						} else {
							if (subtotal >= 50) {
								setShippingValue(100);
							} else {
								setShippingValue(50);
							}
						}
				});
			}
		}
		//eslint-disable-next-line
	}, [cart.productsList]);

	const subtotal = parseFloat(
		cart?.productsList
			?.reduce((acc, product) => {
				return acc + product.qty * product.price;
			}, 0)
			.toFixed(2),
	);
	const subtotalFormatted = priceFormatter(subtotal);

	const delivery = shippingValue;
	const deliveryFormatted = priceFormatter(delivery);
	const total = subtotal + delivery;
	const totalFormatted = priceFormatter(total);

	const noStock: IProduct[] = [];

	const checkStock = (): boolean => {
		cart?.productsList?.forEach(productInCart => {
			const productInStock = productsList.find(
				productInStock => productInStock.id === productInCart.id,
			);
			if (productInStock && productInCart.qty > productInStock.qty) {
				noStock.push(productInStock);
			}
		});

		setNotAllowedPurchase(noStock);
		return noStock.length === 0;
	};

	const updateStock = (): void => {
		cart?.productsList?.forEach(productInCart => {
			const productInStock = productsList.find(
				productInStock => productInStock.id === productInCart.id,
			);

			if (productInStock) {
				controller.updateProduct(
					productInStock.id,
					{ qty: productInStock.qty - productInCart.qty },
					user.token,
				);
			}
		});
	};

	const handlePayment = () => {
		if (user !== null && user.auth) {
			if (checkStock()) {
				const myId: number = user.personalData.id;
				const date: string = new Date().toDateString();

				productSeller.then(seller => {
					if (seller) {
						const purchase: IPurchase = {
							userId: myId,
							sellerId: seller.id,
							date: date,
							subtotal: subtotal,
							delivery: delivery,
							total: total,
							isReceived: false,
							products: cart.productsList,
						};

						if (purchase.userId !== purchase.sellerId) {
							updateStock();
							controller.createPurchase(user.token, purchase);
							setCheckUser(true);
							localStorage.removeItem(CART_LOCALSTORAGE_FLAG);
							toggleModal();
						} else {
							localStorage.removeItem(CART_LOCALSTORAGE_FLAG);
							toggleModal();
						}
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
				{cart?.productsList?.length ? (
					<>
						<ul className="scroll">
							{cart?.productsList?.map((product: IProduct) => (
								<ProductCardInCartHistoryMobile
									scenery="cart"
									key={product.id}
									item={product}
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
				{cart?.productsList?.length ? (
					<>
						<ul className="scroll">
							{cart?.productsList?.map((product: IProduct) => (
								<ProductCardInCartHistory
									scenery="cart"
									key={product.id}
									item={product}
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
