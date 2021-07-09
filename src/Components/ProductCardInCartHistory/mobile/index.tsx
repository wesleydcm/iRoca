import { Wrapper } from "../styles";
import { ReactComponent as TrashSvg } from "../../../assets/images-mobile/trash.svg";
import { ReactComponent as OrganicSvg } from "../../../assets/images-mobile/organic_flag.svg";
import { IProduct } from "../../../@types";
import { priceFormatter } from "../../../utils";

interface Props {
	item: IProduct;
	"data-testid"?: string;
	scenery: "cart" | "history";
}
/**
 * === MOBILE VERSION ===
 * It's the product that must be used into "cart" or into "history" pages.
 * @prop item - The item as "IProduct" that must be rendered.
 * @prop scenery - Where the this component should be rendered.
 */
const ProductCardInCartHistoryMobile = ({
	scenery,
	item,
	...rest
}: Props): JSX.Element => {
	const drillScenery = scenery;

	return (
		<Wrapper scenery={drillScenery} {...rest}>
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
				<h3>{item.qty}kg</h3>
			</div>
			<div data-css="statusWrapper">
				{scenery === "cart" && (
					<button>
						<TrashSvg />
					</button>
				)}
				<span>{priceFormatter(item.price)}/kg</span>
			</div>
		</Wrapper>
	);
};

export default ProductCardInCartHistoryMobile;
