import { Wrapper } from "../styles";
import { ReactComponent as HeartSvg } from "../../../assets/images-mobile/heart.svg";
import { ReactComponent as OrganicSvg } from "../../../assets/images-mobile/organic_flag.svg";
import { IProduct } from "../../../@types";
import { priceFormatter } from "../../../utils";

interface Props {
	item: IProduct;
}
/**
 * It's the product that must be used into cart.
 * == MOBILE VERSION ==
 * @prop item - The item as "IProduct" that must be rendered.
 */
const ProductCardInCartMobile = ({ item }: Props): JSX.Element => {
	return (
		<Wrapper>
			{item.isOrganic && (
				<figure className="organicFlag">
					<OrganicSvg />
					<figcaption>
						{item.isOrganic ? "produto orgânico" : "produto não orgânico"}
					</figcaption>
				</figure>
			)}
			<figure>
				<img src={item.images[0].url} alt={item.name} />
				<figcaption>{item.name}</figcaption>
			</figure>
			<div>
				<h2>{item.name}</h2>
				<h3>{item.description}</h3>
			</div>
			<div data-css="statusWrapper">
				<div>
					{/* <ReviewStarMobile /> */}
					<HeartSvg />
				</div>
				<div>
					<span>{priceFormatter(item.price)}/kg</span>
				</div>
			</div>
		</Wrapper>
	);
};

export default ProductCardInCartMobile;