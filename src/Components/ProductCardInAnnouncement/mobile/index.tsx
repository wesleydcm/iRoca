import { Wrapper } from "../styles";
import { ReactComponent as HeartSvg } from "../../../assets/images-mobile/heart.svg";
import { ReactComponent as OrganicSvg } from "../../../assets/images-mobile/organic_flag.svg";
import { IEvaluation, IProduct } from "../../../@types";
import { priceFormatter } from "../../../utils";
import RatingStars from "../../RatingStars";
import { useMemo } from "react";

interface Props {
	item: IProduct;
	"data-testid"?: string;
}
/**
 * It's the product that must be used into announcements.
 * == MOBILE VERSION ==
 * @prop item - The item as "IProduct" that must be rendered.
 */
const ProductCardInAnnouncementMobile = ({
	item,
	...rest
}: Props): JSX.Element => {
	const evaluationsMedia = useMemo<number>(() => {
		if (item.evaluations.length) {
			return (
				item.evaluations.reduce((acc: number, evaluation: IEvaluation) => {
					// console.log("entrou no reduce!");
					return acc + evaluation.grade;
				}, 0) / item.evaluations.length
			);
		}
		return 0;
	}, [item.evaluations]);

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
					<RatingStars value={evaluationsMedia} readOnly />
					<HeartSvg />
				</div>
				<div>
					<span>{priceFormatter(item.price)}/kg</span>
				</div>
			</div>
		</Wrapper>
	);
};

export default ProductCardInAnnouncementMobile;
