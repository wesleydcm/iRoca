import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ProductCardInAnnouncement from "../desktop";
import ProductCardInAnnouncementMobile from "../mobile";
import { IEvaluation, Image, IProduct } from "../../../@types";

const mockedProduct: IProduct = {
	name: "Mussum Ipsum",
	category: "fruit",
	description:
		"Mussum Ipsum, cacilds vidis litro abertis. Per aumento de cachacis, eu reclamis.",
	userId: 1,
	price: 2.5,
	isOrganic: true,
	qty: 100,
	images: [
		{
			url: "http://2.bp.blogspot.com/-M1-bXKeN3Ww/TfvOP9orTpI/AAAAAAAABqg/VdN6nIOw__8/s1600/morango.png",
		} as Image,
	],
	evaluations: [{} as IEvaluation],
};

describe('Component "ProductCardInCart":', () => {
	const title = "Should this component";

	it(`${title} be rendered in a Mobile version`, () => {
		render(
			<ProductCardInAnnouncementMobile data-testid="mobile" item={mockedProduct} />,
		);
		const productCard = screen.getByTestId("mobile");

		expect(productCard).toBeInTheDocument();
	});

	it(`${title} be rendered in a Desktop version`, () => {
		render(
			<ProductCardInAnnouncement data-testid="desktop" item={mockedProduct} />,
		);
		const productCard = screen.getByTestId("desktop");

		expect(productCard).toBeInTheDocument();
	});
});
