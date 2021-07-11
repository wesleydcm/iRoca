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
import InputIconMobile from "../../../Components/InputIcon/mobile";
import type { ITreatedProduct, ICategoriesAndTypes } from "../../../@types";
import ProductCardInAnnouncementMobile from "../../../Components/ProductCardInAnnouncement/mobile";
import Loading from "../../../Components/Loading";
import { useUser } from "../../../Providers/user";
import { errorToast } from "../../../utils";

interface Props {
	searchValue: string;
	setSearchValue: React.Dispatch<React.SetStateAction<string>>;
	filteredProductsList: ITreatedProduct[];
	setCategorySelected: React.Dispatch<React.SetStateAction<string>>;
	selectedType: string;
	setTypeSelected: React.Dispatch<React.SetStateAction<string>>;
	categoriesAndTypes: ICategoriesAndTypes;
	categorySelected: string;
	isLoading: boolean;
	onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

const HomeMobile = ({
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
	const { user } = useUser();
	const { ORGANICS, COMMONS, FAVORITES, FRUIT, VEGETABLES1, VEGETABLES2 } =
		categoriesAndTypes;

	return (
		<Wrapper>
			<LogoSvg data-css="logo" />
			<InputIconMobile
				styles={{ height: 35 }}
				action="search"
				value={searchValue}
				setValue={setSearchValue}
				icon={SearchSvg}
				onClick={onClick}
			/>

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
					<button
						type="button"
						onClick={() => {
							user && user.auth
								? setTypeSelected(FAVORITES)
								: errorToast("Faça seu login.");
						}}
					>
						<img src={HeartSvg} alt={FAVORITES} />
					</button>
					<span>{FAVORITES}</span>
				</LiStyled>
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

			<h3>destaques</h3>
			<ul data-css="productsWrapper">
				{isLoading ? (
					<Loading size={50} />
				) : (
					filteredProductsList.map(item => (
						<ProductCardInAnnouncementMobile
							key={item.product.id}
							item={item}
							isFavorite={item.isFavorite}
						/>
					))
				)}
			</ul>
		</Wrapper>
	);
};

export default HomeMobile;
