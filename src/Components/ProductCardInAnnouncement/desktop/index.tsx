import { Wrapper } from "../styles";
import { ReactComponent as HeartSvg } from "../../../assets/images-mobile/heart.svg";
import { ReactComponent as OrganicSvg } from "../../../assets/images-mobile/organic_flag.svg";
import { IProduct } from "../../../@types";
import { priceFormatter } from "../../../utils";

interface Props {
	item: IProduct;
	"data-testid"?: string;
}
/**
 * It's the product that must be used into cart.
 * == DESKTOP VERSION ==
 * @prop item - The item as "IProduct" that must be rendered.
 */

const ProductCardInAnnouncement = ({ item, ...rest }: Props): JSX.Element => {
	return (
		<Wrapper {...rest}>
			{item.isOrganic && (
				<figure className="organicFlag">
					<OrganicSvg />
					<figcaption>
						{item.isOrganic ? "produto orgânico" : "produto não orgânico"}
					</figcaption>
				</figure>
			)}
			<div data-css="infoWrapper">
				<h2>{item.name}</h2>
				{/* <ReviewStarMobile /> */}
				<h3>{item.description}</h3>
			</div>
			<figure>
				<img src={item.images[0].url} alt={item.name} />
				<figcaption>{item.name}</figcaption>
			</figure>
			<div data-css="statusWrapper">
				<HeartSvg />
				<span>{priceFormatter(item.price)}/kg</span>
			</div>
		</Wrapper>
	);
};

export default ProductCardInAnnouncement;
