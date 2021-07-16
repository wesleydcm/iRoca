import HomeMobile from "./mobile";
import HomeDesktop from "./desktop";
import { useEffect, useMemo, useState } from "react";
import type { ITreatedProduct, IProduct } from "../../@types";
import { categoriesAndTypes, WINDOW_SIZE_DESKTOP } from "../../utils";
import { useUser } from "../../providers/user";
import { useWindow } from "../../providers/window";

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

	//on every user interaction, will update the "allProductsList":
	useEffect(() => {
		if (!!categorySelected || !!selectedType) {
			if (user && user.auth) {
				controller.getProduct().then((response: IProduct[]) => {
					const validProducts = response.filter(
						item => item.userId !== user.personalData.id,
					);
					setAllProductsList(validProducts);
				});
			} else {
				controller.getProduct().then((response: IProduct[]) => {
					setAllProductsList(response);
				});
			}
			setIsLoading(false);
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
		// console.log("productsByID :>> ", "mount the dictionary...");
		return allProductsList.reduce((acc, product: IProduct) => {
			return { ...acc, [product.id]: product };
		}, {});
	}, [allProductsList]);

	const checkIsFavorite = (
		treatedProduct: ITreatedProduct,
	): ITreatedProduct => {
		if (user && user.auth) {
			const {
				personalData: { favorites },
			} = user;
			// console.log('user :>> ', user.personalData);

			treatedProduct.isFavorite = favorites.includes(treatedProduct.product.id);

			return treatedProduct;
		}

		return treatedProduct;
	};

	const filterProducts = (): void => {
		// console.log("filterProducts :>> ", "creating the function...");
		const { FAVORITES, ORGANICS } = categoriesAndTypes;

		if (!!searchValue.length) {
			if (
				!!categorySelected ||
				selectedType === FAVORITES ||
				selectedType === ORGANICS
			) {
				const filteredProductsLists = filteredProductsList.filter(
					({ product }: ITreatedProduct) =>
						product.name
							.toLocaleLowerCase()
							.includes(searchValue.toLocaleLowerCase()),
				);

				setFilteredProductsList(filteredProductsLists);
			} else {
				const filteredProductsList = allProductsList.filter(
					(product: IProduct) =>
						product.name
							.toLocaleLowerCase()
							.includes(searchValue.toLocaleLowerCase()),
				);

				const averagedProductsList =
					controller.getAllAverages(filteredProductsList);

				setFilteredProductsList(averagedProductsList);
			}
		} else if (!!selectedType || !!categorySelected) {
			switch (selectedType) {
				case ORGANICS:
					const organicProducts = allProductsList.filter(product => {
						if (!!categorySelected) {
							return product.isOrganic && product.category === categorySelected;
						}

						return product.isOrganic;
					});

					const averagedProductsList: ITreatedProduct[] =
						controller.getAllAverages(organicProducts);
					averagedProductsList.forEach(item => checkIsFavorite(item));

					setFilteredProductsList(averagedProductsList);
					break;

				case FAVORITES:
					if (user && user.auth) {
						const favoritesProductsList = user.personalData.favorites.map(
							favoriteID => productsByID[favoriteID],
						);

						const favoritesByCategory = favoritesProductsList.filter(
							favoriteProduct => {
								if (!!categorySelected) {
									return favoriteProduct.category === categorySelected;
								}
								return favoriteProduct;
							},
						);

						let averagedProductsList: ITreatedProduct[] =
							controller.getAllAverages(favoritesByCategory);

						averagedProductsList.forEach(
							favoriteProduct => (favoriteProduct.isFavorite = true),
						);
						setFilteredProductsList(averagedProductsList);
					}
					break;

				default:
					const productsByCategory = allProductsList.filter(product => {
						if (!!categorySelected) {
							return product.category === categorySelected;
						}
						return product;
					});

					const avgProductsByCategoryList: ITreatedProduct[] =
						controller.getAllAverages(productsByCategory);
					avgProductsByCategoryList.forEach(item => checkIsFavorite(item));

					setFilteredProductsList(avgProductsByCategoryList);

					break;
			}
		}
		// eslint-disable-next-line
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
