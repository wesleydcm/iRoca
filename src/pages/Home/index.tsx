import HomeMobile from "./mobile";
import HomeDesktop from "./desktop";
import { useEffect, useState } from "react";
import type { IAveragedProduct, IProduct } from "../../@types";
import { categoriesAndTypes, WINDOW_SIZE_DESKTOP } from "../../utils";
import { useUser } from "../../Providers/user";
import { useWindow } from "../../Providers/window";

const Home = () => {
	const [searchValue, setSearchValue] = useState<string>("");
	const [categorySelected, setCategorySelected] = useState<string>("");
	const [selectedType, setTypeSelected] = useState<string>("");
	const [filteredProductsList, setFilteredProductsList] = useState<
		IAveragedProduct[]
	>([]);
	const [allProductsList, setAllProductsList] = useState<IProduct[]>([]);
	const { initController } = useUser();
	const controller = initController();
	const { pageWidth } = useWindow();
	const [isLoading, setIsLoading] = useState<boolean>(true);

	useEffect(() => {
		controller.getProduct().then(response => {
			setAllProductsList(response);
		});
		// eslint-disable-next-line
	}, [categorySelected, selectedType]);

	useEffect(() => {
		if (allProductsList.length) {
			const averagedProductsList = controller.getAllAverages(allProductsList);

			setFilteredProductsList(averagedProductsList.slice(0, 9));
			setIsLoading(false);
		}
		// console.log("categorySelected - Pai :>> ", categorySelected);
		// eslint-disable-next-line
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
		}
	};
	// console.log("Redenrizou!");

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
