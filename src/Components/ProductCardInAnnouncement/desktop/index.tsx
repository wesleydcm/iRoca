import { Wrapper } from "../styles";
import { ReactComponent as HeartSvg } from "../../../assets/images-mobile/heart.svg";
import { ReactComponent as OrganicSvg } from "../../../assets/images-mobile/organic_flag.svg";
import { IAveragedProduct } from "../../../@types";
import { priceFormatter } from "../../../utils";
import RatingStars from "../../RatingStars";

interface Props {
	item: IAveragedProduct;
	"data-testid"?: string;
}
/**
 * It's the product that must be used into announcements.
 * == DESKTOP VERSION ==
 * @prop item - The item as "IProduct" that must be rendered.
 */

const ProductCardInAnnouncement = ({
	item: { product, average },
	...rest
}: Props): JSX.Element => {
	return (
		<Wrapper {...rest}>
			{product.isOrganic && (
				<figure className="organicFlag">
					<OrganicSvg />
					<figcaption>
						{product.isOrganic ? "produto orgânico" : "produto não orgânico"}
					</figcaption>
				</figure>
			)}
			<div>
				<div className="infoWrapper">
					<h2>{product.name}</h2>
					<RatingStars value={average} readOnly />
					<h3>{product.description}</h3>
				</div>
				<figure>
					<img src={product.images[0].url} alt={product.name} />
					<figcaption>{product.name}</figcaption>
				</figure>
			</div>
			<div className="statusWrapper">
				<HeartSvg />
				<span>{priceFormatter(product.price)}/kg</span>
			</div>
		</Wrapper>
	);
};

export default ProductCardInAnnouncement;
