import HomeMobile from "./mobile";
import HomeDesktop from "./desktop";
import { useEffect, useMemo, useState } from "react";
import type { IBestProducts, IProduct } from "../../@types";
import { mockedProduct } from "../../utils/mocks";
import { categoriesAndTypes, WINDOW_SIZE_DESKTOP } from "../../utils";
import { useUser } from "../../Providers/user";
import { useWindow } from "../../Providers/window";

const Home = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [categorySelected, setCategorySelected] = useState<string>("");
  const [selectedType, setTypeSelected] = useState<string>("");
  const [bestProductsList, setBestProductsList] = useState<IBestProducts[]>([]);
  const [allProductsList, seTAllProductsList] = useState<IProduct[]>([]);

  const { initController } = useUser();
  const controller = initController();
  const { pageWidth } = useWindow();

  useEffect(() => {
    controller.getProduct().then((response) => {
      seTAllProductsList(response);
    });
  }, [categorySelected, selectedType]);

  useEffect(() => {
    if (allProductsList.length) {
      const averagesList = allProductsList.map((item) =>
        controller.getEvaluationsAverage(item)
      );

      console.log("averagesList :>> ", averagesList);
      averagesList.sort(
        (productA, productB) => productB.average - productA.average
      );

      setBestProductsList(averagesList.slice(0, 9));
    }
  }, [allProductsList]);

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
        <HomeDesktop
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          setCategorySelected={setCategorySelected}
          setTypeSelected={setTypeSelected}
          bestProductsList={bestProductsList}
          categoriesAndTypes={categoriesAndTypes}
        />
      )}
    </>
  );
};

export default Home;
