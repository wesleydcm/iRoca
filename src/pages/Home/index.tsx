import HomeMobile from "./mobile";
import HomeDesktop from "./desktop";
import { useEffect, useState } from "react";
import type { IProduct } from "../../@types";
import { mockedProduct } from "../../utils/mocks";
import { categoriesAndTypes, WINDOW_SIZE_DESKTOP } from "../../utils";
import { useUser } from "../../Providers/user";
import { useWindow } from "../../Providers/window";

const Home = () => {
	const [searchValue, setSearchValue] = useState<string>("");
	const [categorySelected, setCategorySelected] = useState<string>("");
	const [selectedType, setTypeSelected] = useState<string>("");
	const [bestProductsList, setBestProductsList] = useState<IProduct[]>([
		mockedProduct,
	]);
	const [allProductsList, seTAllProductsList] = useState<IProduct[]>([]);

	const { initController } = useUser();
	const controller = initController();
	const { pageWidth } = useWindow();

	useEffect(() => {
		controller.getProduct().then(response => {
			seTAllProductsList(response);
		});
	}, [categorySelected, selectedType]);
	return (
		<>
			{pageWidth < WINDOW_SIZE_DESKTOP ? (
				<HomeMobile
					searchValue={searchValue}
					setSearchValue={setSearchValue}
					setCategorySelected={setCategorySelected}
					setTypeSelected={setTypeSelected}
					bestProductsList={bestProductsList}
					categoriesAndTypes={categoriesAndTypes}
				/>
			) : (
				<HomeDesktop />
			)}
		</>
	);
};

export default Home;
