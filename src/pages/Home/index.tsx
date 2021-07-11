import HomeMobile from "./mobile";
import HomeDesktop from "./desktop";
import { useEffect, useMemo, useState } from "react";
import type { ITreatedProduct, IProduct } from "../../@types";
import { categoriesAndTypes, WINDOW_SIZE_DESKTOP } from "../../utils";
import { useUser } from "../../Providers/user";
import { useWindow } from "../../Providers/window";
import { Favorite } from "@material-ui/icons";

interface IProductByID {
	[key: number]: IProduct;
}

const Home = () => {
	const [searchValue, setSearchValue] = useState<string>("");
	const [categorySelected, setCategorySelected] = useState<string>("");
	const [selectedType, setTypeSelected] = useState<string>(
		categoriesAndTypes.COMMONS,
	);
	const [filteredProductsList, setFilteredProductsList] = useState<
		ITreatedProduct[]
	>([]);
	const [allProductsList, setAllProductsList] = useState<IProduct[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const { initController, user } = useUser();
	const { pageWidth } = useWindow();
	const controller = initController();

	//on first load, will update the "allProductsList":
	useEffect(() => {
		controller.getProduct().then(response => {
			setAllProductsList(response);
		});
		// eslint-disable-next-line
	}, []);

	//on every user interaction, will update the "allProductsList":
	useEffect(() => {
		if (!!categorySelected || !!selectedType) {
			controller.getProduct().then(response => {
				setAllProductsList(response);
			});
		}
		// eslint-disable-next-line
	}, [categorySelected, selectedType]);

	useEffect(() => {
		if (allProductsList.length) {
			const averagedProductsList = controller.getAllAverages(allProductsList);

			setFilteredProductsList(averagedProductsList.slice(0, 9));
			filterProducts();
			setIsLoading(false);
		}
		// eslint-disable-next-line
	}, [allProductsList]);

	const productsByID: IProductByID = useMemo<IProductByID>(() => {
		console.log("productsByID :>> ", "mount the dictionary...");
		return allProductsList.reduce((acc, product: IProduct) => {
			return { ...acc, [product.id]: product };
		}, {});
	}, [allProductsList]);

	const filterProducts = (): void => {
		if (searchValue.length >= 3) {
			const filteredProductsList = allProductsList.filter((product: IProduct) =>
				product.name
					.toLocaleLowerCase()
					.includes(searchValue.toLocaleLowerCase()),
			);

			const averagedProductsList =
				controller.getAllAverages(filteredProductsList);

			setFilteredProductsList(averagedProductsList);
		} else if (!!selectedType) {
			const { FAVORITES, ORGANICS } = categoriesAndTypes;

			switch (selectedType) {
				case FAVORITES:
					if (user && user.auth) {
						const favoritesProductsList = user.personalData.favorites.map(
							favoriteID => productsByID[favoriteID],
						);

						const averagedProductsList = controller.getAllAverages(
							favoritesProductsList,
						);

						averagedProductsList.forEach(
							favoriteProduct => (favoriteProduct.isFavorite = true),
						);
						setFilteredProductsList(averagedProductsList);
					}

					break;
				case ORGANICS:
					const organicProducts = allProductsList.filter(
						product => product.isOrganic,
					);

					const averagedProductsList =
						controller.getAllAverages(organicProducts);

					setFilteredProductsList(averagedProductsList);
					break;

				default:
					break;
			}

			// const averagedProductsList =
			// 	controller.getAllAverages(filteredProductsList);

			// setFilteredProductsList(averagedProductsList);
		} else if (!!categorySelected) {
		} else {
		}
	};

	return (
		<>
			{pageWidth < WINDOW_SIZE_DESKTOP ? (
				<HomeMobile
					isLoading={isLoading}
					searchValue={searchValue}
					setSearchValue={setSearchValue}
					categorySelected={categorySelected}
					setCategorySelected={setCategorySelected}
					selectedType={selectedType}
					setTypeSelected={setTypeSelected}
					filteredProductsList={filteredProductsList}
					categoriesAndTypes={categoriesAndTypes}
					onClick={filterProducts}
				/>
			) : (
				<HomeDesktop
					isLoading={isLoading}
					searchValue={searchValue}
					setSearchValue={setSearchValue}
					categorySelected={categorySelected}
					setCategorySelected={setCategorySelected}
					selectedType={selectedType}
					setTypeSelected={setTypeSelected}
					filteredProductsList={filteredProductsList}
					categoriesAndTypes={categoriesAndTypes}
					onClick={filterProducts}
				/>
			)}
		</>
	);
};

export default Home;
