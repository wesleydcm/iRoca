import { Wrapper } from "../styles";
import { ReactComponent as HeartSvg } from "../../../assets/images-mobile/heart.svg";
import { ReactComponent as OrganicSvg } from "../../../assets/images-mobile/organic_flag.svg";
import { ITreatedProduct } from "../../../@types";
import { priceFormatter } from "../../../utils";
import RatingStars from "../../RatingStars";
import { memo, useRef } from "react";

interface Props {
	item: ITreatedProduct;
	isFavorite?: boolean;
	"data-testid"?: string;
}
/**
 * It's the product that must be used into announcements.
 * == DESKTOP VERSION ==
 * @prop `item` - The item as "IProduct" that must be rendered.
 * @prop `IsFavorite` - The flag used to display the `favicon in this card.
 */

const ProductCardInAnnouncement = ({
	item: { product, average },
	isFavorite,
	...rest
}: Props): JSX.Element => {
	const reRendersAmount = useRef(0);
	// console.log(
	// 	"ProductCardInAnnouncement\nreRendersAmount :>> ",
	// 	reRendersAmount.current++,
	// );

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
				{isFavorite && <HeartSvg />}
				<span>{priceFormatter(product.price)}/kg</span>
			</div>
		</Wrapper>
	);
};

export default memo(ProductCardInAnnouncement);
