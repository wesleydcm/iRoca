import { Wrapper } from "../styles";
import { ReactComponent as LogoSvg } from "../../../assets/images-mobile/logo.svg";
import { ReactComponent as SearchSvg } from "../../../assets/images-desktop/search.svg";
import CommonProductsSvg from "../../../assets/images-mobile/common_products.svg";
import FruitsCategorySvg from "../../../assets/images-mobile/fruit_category.svg";
import Vegetables1CategorySvg from "../../../assets/images-mobile/vegetables1_category.svg";
import Vegetables2CategorySvg from "../../../assets/images-mobile/vegetables2_category.svg";
import OrganicSvg from "../../../assets/images-mobile/organic_category.svg";
import HeartSvg from "../../../assets/images-mobile/heart.svg";
import InputIconMobile from "../../../Components/InputIcon/mobile";
import { useEffect, useState } from "react";
import { IProduct } from "../../../@types";
import { mockedProduct } from "../../../utils/mocks";
import { categoriesAndTypes } from "../../../utils";
import ProductCardInAnnouncementMobile from "../../../Components/ProductCardInAnnouncement/mobile";

const HomeMobile = () => {
	const [searchValue, setSearchValue] = useState<string>("");
	const [categorySelected, setCategorySelected] = useState<string>("");
	const [selectedType, setTypeSelected] = useState<string>("");
	const [bestSellersList, setBestSellersList] = useState<IProduct[]>([
		mockedProduct,
	]);

	const { ORGANICS, COMMONS, FAVORITES, FRUIT, VEGETABLES1, VEGETABLES2 } =
		categoriesAndTypes;

	useEffect(() => {
		setBestSellersList([mockedProduct]);
	}, [categorySelected, selectedType]);

	return (
		<Wrapper>
			<LogoSvg data-css="logo" />
			<InputIconMobile
				styles={{ height: 35 }}
				action="search"
				value={searchValue}
				setValue={setSearchValue}
				icon={SearchSvg}
			/>

			<ul data-css="filtersWrapper">
				<li>
					<button type="button" onClick={() => setTypeSelected(COMMONS)}>
						<img src={CommonProductsSvg} alt={COMMONS} />
					</button>
					<span>{COMMONS}</span>
				</li>
				<li>
					<button type="button" onClick={() => setTypeSelected(ORGANICS)}>
						<img src={OrganicSvg} alt={ORGANICS} />
					</button>
					<span>{ORGANICS}</span>
				</li>
				<li>
					<button type="button" onClick={() => setTypeSelected(FAVORITES)}>
						<img src={HeartSvg} alt={FAVORITES} />
					</button>
					<span>{FAVORITES}</span>
				</li>
				<li>
					<button type="button" onClick={() => setCategorySelected(FRUIT)}>
						<img src={FruitsCategorySvg} alt={FRUIT} />
					</button>
					<span>{FRUIT}</span>
				</li>
				<li>
					<button
						type="button"
						onClick={() => setCategorySelected(VEGETABLES1)}
					>
						<img src={Vegetables1CategorySvg} alt={VEGETABLES1} />
					</button>
					<span>{VEGETABLES1}</span>
				</li>
				<li>
					<button
						type="button"
						onClick={() => setCategorySelected(VEGETABLES2)}
					>
						<img src={Vegetables2CategorySvg} alt={VEGETABLES2} />
					</button>
					<span>{VEGETABLES2}</span>
				</li>
			</ul>

			<h3>destaques</h3>
			<ul data-css="productsWrapper">
				{bestSellersList.map(product => (
					<ProductCardInAnnouncementMobile key={product.id} item={product} />
				))}
			</ul>
		</Wrapper>
	);
};

export default HomeMobile;