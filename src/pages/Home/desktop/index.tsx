import { Wrapper, LiStyled } from "../styles";
import { ReactComponent as LogoSvg } from "../../../assets/images-mobile/logo.svg";
import { ReactComponent as CheckSvg } from "../../../assets/images-mobile/check.svg";
import { ReactComponent as SearchSvg } from "../../../assets/images-desktop/search.svg";
import CommonProductsSvg from "../../../assets/images-mobile/common_products.svg";
import FruitsCategorySvg from "../../../assets/images-mobile/fruit_category.svg";
import Vegetables1CategorySvg from "../../../assets/images-mobile/vegetables1_category.svg";
import Vegetables2CategorySvg from "../../../assets/images-mobile/vegetables2_category.svg";
import OrganicSvg from "../../../assets/images-mobile/organic_category.svg";
import HeartSvg from "../../../assets/images-mobile/heart.svg";
import InputIconDesktop from "../../../Components/InputIcon/desktop";
import { IAveragedProduct, ICategoriesAndTypes } from "../../../@types";
import ProductCardInAnnouncement from "../../../Components/ProductCardInAnnouncement/desktop";
import Loading from "../../../Components/Loading";

interface Props {
	searchValue: string;
	setSearchValue: React.Dispatch<React.SetStateAction<string>>;
	filteredProductsList: IAveragedProduct[];
	setCategorySelected: React.Dispatch<React.SetStateAction<string>>;
	selectedType: string;
	setTypeSelected: React.Dispatch<React.SetStateAction<string>>;
	categoriesAndTypes: ICategoriesAndTypes;
	categorySelected: string;
	isLoading: boolean;
	onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

const HomeDesktop = ({
	filteredProductsList,
	setCategorySelected,
	searchValue,
	setSearchValue,
	categorySelected,
	selectedType,
	setTypeSelected,
	categoriesAndTypes,
	isLoading,
	onClick,
}: Props) => {
	const { ORGANICS, COMMONS, FAVORITES, FRUIT, VEGETABLES1, VEGETABLES2 } =
		categoriesAndTypes;

	return (
		<Wrapper>
			<header>
				<InputIconDesktop
					styles={{ width: 660, height: 60 }}
					action="search"
					value={searchValue}
					setValue={setSearchValue}
					icon={SearchSvg}
					onClick={onClick}
				/>
				<LogoSvg data-css="logo" />
			</header>
			<div data-css="filtersContainer">
				<ul data-css="filtersWrapper">
					<LiStyled isSelected={selectedType === COMMONS}>
						{selectedType === COMMONS && <CheckSvg />}
						<button type="button" onClick={() => setTypeSelected(COMMONS)}>
							<img src={CommonProductsSvg} alt={COMMONS} />
						</button>
						<span>{COMMONS}</span>
					</LiStyled>
					<LiStyled isSelected={selectedType === ORGANICS}>
						{selectedType === ORGANICS && <CheckSvg />}
						<button type="button" onClick={() => setTypeSelected(ORGANICS)}>
							<img src={OrganicSvg} alt={ORGANICS} />
						</button>
						<span>{ORGANICS}</span>
					</LiStyled>
					<LiStyled isSelected={selectedType === FAVORITES}>
						{selectedType === FAVORITES && <CheckSvg />}
						<button type="button" onClick={() => setTypeSelected(FAVORITES)}>
							<img src={HeartSvg} alt={FAVORITES} />
						</button>
						<span>{FAVORITES}</span>
					</LiStyled>
				</ul>
				<ul data-css="filtersWrapper">
					<LiStyled isSelected={categorySelected === FRUIT}>
						{categorySelected === FRUIT && <CheckSvg />}
						<button type="button" onClick={() => setCategorySelected(FRUIT)}>
							<img src={FruitsCategorySvg} alt={FRUIT} />
						</button>
						<span>{FRUIT}</span>
					</LiStyled>
					<LiStyled isSelected={categorySelected === VEGETABLES1}>
						{categorySelected === VEGETABLES1 && <CheckSvg />}
						<button
							type="button"
							onClick={() => setCategorySelected(VEGETABLES1)}
						>
							<img src={Vegetables1CategorySvg} alt={VEGETABLES1} />
						</button>
						<span>{VEGETABLES1}</span>
					</LiStyled>
					<LiStyled isSelected={categorySelected === VEGETABLES2}>
						{categorySelected === VEGETABLES2 && <CheckSvg />}
						<button
							type="button"
							onClick={() => setCategorySelected(VEGETABLES2)}
						>
							<img src={Vegetables2CategorySvg} alt={VEGETABLES2} />
						</button>
						<span>{VEGETABLES2}</span>
					</LiStyled>
				</ul>
			</div>

			<h3>destaques</h3>

			<ul data-css="productsWrapper">
				{isLoading ? (
					<Loading size={100} />
				) : (
					filteredProductsList.map(item => (
						<ProductCardInAnnouncement key={item.product.id} item={item} />
					))
				)}
			</ul>
		</Wrapper>
	);
};

export default HomeDesktop;
