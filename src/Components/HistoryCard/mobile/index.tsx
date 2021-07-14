// import { useRef } from "react";
import { memo } from "react";
import { Wrapper } from "../styles";
import { IProduct, IPurchase, IPurchaseSeller } from "../../../@types";
import ProductCardInCartHistoryMobile from "../../ProductCardInCartHistory/mobile";
import { ReactComponent as CheckSvg } from "../../../assets/images-mobile/check.svg";
import { priceFormatter } from "../../../utils";

interface Props {
	seller: IPurchaseSeller;
	purchase: IPurchase;
	"data-testid"?: string;
}
/**
 * It's the product that must be used into histories.
 * == MOBILE VERSION ==
 * @prop  {IProduct} seller - The seller that must be rendered.
 * @prop  {IPurchase} purchase - The purchase that must be rendered.
 * @prop {string} "data-testid?" - Only to jest tests proposal.
 */
const HistoryCardMobile = ({
	seller,
	purchase,
	...rest
}: Props): JSX.Element => {
	// const ref = useRef(0);
	// console.log(ref.current++);
	return (
		<Wrapper isReceived={purchase.isReceived} {...rest}>
			<div data-css="seller__data">
				<h3>Vendedor</h3>
				<div>
					<span>Nome:</span>
					<span>{seller.name}</span>
				</div>
				<div>
					<span>Telefone:</span>
					<span>{seller.phone}</span>
				</div>
				<div>
					<span>E-mail:</span>
					<span>{seller.email}</span>
				</div>
				<h2>Itens</h2>
			</div>
			<span data-css="date">{purchase.date}</span>
			<ul>
				{purchase.products.map((item: IProduct) => (

						<ProductCardInCartHistoryMobile key={item.id} scenery="history" item={item} />

				))}
			</ul>
			<div data-css="isReceivedWrapper">
				<span>Recebido?</span>
				<CheckSvg />
			</div>
			<div data-css="purchase__data">
				<div>
					<span>Subtotal: </span>
					<span>{priceFormatter(purchase.subtotal)}</span>
				</div>
				<div>
					<span>Frete: </span>
					<span>{priceFormatter(purchase.delivery)}</span>
				</div>
				<span>{priceFormatter(purchase.total)}</span>
			</div>
		</Wrapper>
	);
};

export default memo(HistoryCardMobile);
