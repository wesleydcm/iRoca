import HomeMobile from "./mobile";
import HomeDesktop from "./desktop";
import { useEffect, useState } from "react";
import type { IProduct } from "../../@types";
import { mockedProduct } from "../../utils/mocks";
import { categoriesAndTypes } from "../../utils";
import { useUser } from "../../Providers/user";

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

	useEffect(() => {
	// seTAllProductsList(controller.getc1	6'')

	}, [categorySelected, selectedType]);

	return (
		<>
			{window.innerWidth < 900 ? (
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
