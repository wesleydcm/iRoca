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
 * == MOBILE VERSION ==
 * @prop `item` - The item as "IProduct" that must be rendered.
 * @prop `IsFavorite` - The flag used to display the `favicon in this card.
 */
const ProductCardInAnnouncementMobile = ({
	item: { product, average },
	isFavorite,
	...rest
}: Props): JSX.Element => {
	// const reRendersAmount = useRef(0);
	// console.log(
	// 	"ProductCardInAnnouncementMobile\nreRendersAmount :>> ",
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
			<figure>
				<img src={product.images[0].url} alt={product.name} />
				<figcaption>{product.name}</figcaption>
			</figure>
			<div className="infoWrapper">
				<h2>{product.name}</h2>
				<h3>{product.description}</h3>
			</div>
			<div className="statusWrapper">
				<div>
					<RatingStars value={average} readOnly />
					{isFavorite && <HeartSvg />}
				</div>
				<div>
					<span>{priceFormatter(product.price)}/kg</span>
				</div>
			</div>
		</Wrapper>
	);
};

export default memo(ProductCardInAnnouncementMobile);
