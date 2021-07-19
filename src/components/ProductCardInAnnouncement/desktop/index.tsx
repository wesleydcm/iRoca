import { Wrapper } from "../styles";
import { ReactComponent as HeartSvg } from "../../../assets/images-mobile/heart.svg";
import { ReactComponent as OrganicSvg } from "../../../assets/images-mobile/organic_flag.svg";
import { ITreatedProduct } from "../../../@types";
import { priceFormatter } from "../../../utils";
import RatingStars from "../../RatingStars";
import { memo } from "react";
import { useHistory } from "react-router-dom";

interface Props {
	item: ITreatedProduct;
	isFavorite?: boolean;
	"data-testid"?: string;
	ownerProducer?: boolean;
	editProduct?: (product: number) => void;
}
/**
 * It's the product that must be used into announcements.
 * == DESKTOP VERSION ==
 * @prop {IProduct} `item` - The item that must be rendered.
 * @prop {boolean} `IsFavorite` - The flag used to display the `favicon in this card.
 * @prop {string} `data-testid` - Only for Jest tests proposal.
 * @prop {boolean} `ownerProducer` - Determines if the logged user is the this product owner.
 * @prop {(product: number) => void} `editProduct` - The function used to edit the product.
 */

const ProductCardInAnnouncement = ({
	item: { product, average },
	isFavorite,
	...rest
}: Props): JSX.Element => {
	// const reRendersAmount = useRef(0);
	// console.log(
	//   "ProductCardInAnnouncement\nreRendersAmount :>> ",
	//   reRendersAmount.current++
	// );
	const history = useHistory();

	return (
		<Wrapper
			onClick={() => {
				if (product.id && rest.ownerProducer) {
					if (rest.editProduct) {
						rest.editProduct(product.id);
					}
				} else {
					history.push(`/product/${product.id}`);
				}
			}}
			{...rest}
		>
			{product.isOrganic && (
				<figure className="organicFlag">
					<OrganicSvg />
					<figcaption>
						{product.isOrganic ? "produto orgânico" : "produto não orgânico"}
					</figcaption>
				</figure>
			)}
			<div className="description">
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
