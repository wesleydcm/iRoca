import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ProductCardInAnnouncement from "../desktop";
import ProductCardInAnnouncementMobile from "../mobile";
import {mockedProduct} from "../../../utils/mocks";


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
