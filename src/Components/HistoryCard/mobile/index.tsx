import { Wrapper } from "../styles";
import { IProduct, IPurchase, IUser } from "../../../@types";
import ProductCardInCartHistoryMobile from "../../ProductCardInCartHistory/mobile";
import { ReactComponent as CheckSvg } from "../../../assets/images-mobile/check.svg";
import { priceFormatter } from "../../../utils";

interface Props {
	seller: IUser;
	purchase: IPurchase;
	"data-testid"?: string;
}
/**
 * It's the product that must be used into histories.
 * == MOBILE VERSION ==
 * @prop item - The item as "IProduct" that must be rendered.
 */
const HistoryCardMobile = ({
	seller,
	purchase,
	...rest
}: Props): JSX.Element => {
	return (
		<Wrapper isReceived={purchase.isReceived} {...rest}>
			<div data-css="seller__data">
				<h3>Vendedor</h3>
				<div>
					<span>Nome:</span>
					<span>{seller.personalData.name}</span>
				</div>
				<div>
					<span>Telefone:</span>
					<span>{seller.personalData.phone}</span>
				</div>
				<div>
					<span>E-mail:</span>
					<span>{seller.personalData.email}</span>
				</div>
				<h2>Itens</h2>
			</div>
			<span data-css="date">{purchase.date}</span>
			<ul>
				{purchase.products.map((item: IProduct) => (
					<li key={item.id}>
						<ProductCardInCartHistoryMobile scenery="history" item={item} />
					</li>
				))}
			</ul>
			<div data-css="isReceivedWrapper">
				<span>Recebido?</span>
				<CheckSvg />
			</div>
			<div data-css="purchase__data">
				<div>
					<span>Subtotal:</span>
					<span>{priceFormatter(purchase.subtotal)}</span>
				</div>
				<div>
					<span>Frete:</span>
					<span>{priceFormatter(purchase.delivery)}</span>
				</div>
				<span>{priceFormatter(purchase.total)}</span>
			</div>
		</Wrapper>
	);
};

export default HistoryCardMobile;
