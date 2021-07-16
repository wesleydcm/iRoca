import { Container, Modal, InputPlusMinus } from "./styles";
import Button from "../../../components/Button";
import { IoMdCloseCircle } from "react-icons/io";
import { useEffect, useState } from "react";
import { priceFormatter } from "../../../utils/";
import { useCart } from "../../../providers/cart";
import { IProduct } from "../../../@types";
import { errorToast, successToast } from "../../../utils";

interface Props {
	toggleModal: () => void;
	product: IProduct;
	Price: number;
}

const AddToCartComponent = ({ toggleModal, product, Price }: Props) => {
	const [qty, setQty] = useState<number>(0);
	const [total, setTotal] = useState<number>(0);
	const { setCart, cart } = useCart();
	const price = Price;

	const increment = () => {
		setQty(qty + 10);
	};
	const decrement = () => {
		if (qty >= 10) {
			setQty(qty - 10);
		}
	};

	const addToCart = (newProduct: IProduct) => {
		if (qty) {
			if (cart?.productsList?.length) {
				const isAlreadyInCart = cart?.productsList?.find(product => {
					return product.id === newProduct.id;
				});

				const isFromSameSeller =
					newProduct.userId === cart.productsList[0].userId;

				if (isFromSameSeller) {
					if (isAlreadyInCart) {
						isAlreadyInCart.qty += newProduct.qty;
						cart.totalPrice += newProduct.qty * newProduct.price;
					} else {
						const qtyToAdd = qty < newProduct.qty ? qty : newProduct.qty;

						setCart({
							productsList: [
								...cart.productsList,
								{ ...newProduct, qty: qtyToAdd },
							],
							totalPrice: cart.totalPrice + newProduct.qty * newProduct.price,
						});
					}
					successToast("O produto adicionado ao carrinho.");
				} else {
					errorToast("Por favor, escolha produtos do mesmo vendedor.");
				}
			} else {
				const qtyToAdd = qty < newProduct.qty ? qty : newProduct.qty;

				setCart({
					productsList: [{ ...newProduct, qty: qtyToAdd }],
					totalPrice: qtyToAdd * newProduct.price,
				});
				successToast("O produto foi adicionado ao carrinho");
			}
		} else {
			errorToast("Informe alguma quantidade");
		}
	};

	useEffect(() => {
		setTotal(price * qty);
		//eslint-disable-next-line
	}, [qty]);

	return (
		<Container>
			<div className="bg"></div>
			<Modal>
				<div className="price">
					Preço
					<span>{priceFormatter(price)}/kg</span>
				</div>
				<div className="total">
					<span>{priceFormatter(total)}</span>
					<Button color="green" onClick={() => addToCart(product)}>
						Adicionar
					</Button>
				</div>

				<IoMdCloseCircle className="close" onClick={toggleModal} />
				<InputPlusMinus>
					<button onClick={decrement}>-</button>
					<span>{qty}Kg</span>
					<button onClick={increment}>+</button>
				</InputPlusMinus>
			</Modal>
		</Container>
	);
};

export default AddToCartComponent;
