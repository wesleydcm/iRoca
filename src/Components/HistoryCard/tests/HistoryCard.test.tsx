import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import HistoryCard from "../desktop";
import HistoryCardMobile from "../mobile";
import { mockedPurchase1, mockedUser1 } from "../../../utils/mocks";

describe('Component "ProductCardInCart":', () => {
	const title = "Should this component";

	it(`${title} be rendered in a Mobile version`, () => {
		render(
			<HistoryCardMobile
				data-testid="mobile"
				seller={mockedUser1}
				purchase={mockedPurchase1}
			/>,
		);
		const productCard = screen.getByTestId("mobile");

		expect(productCard).toBeInTheDocument();
	});

	it(`${title} be rendered in a Desktop version`, () => {
		render(
			<HistoryCard
				data-testid="desktop"
				seller={mockedUser1}
				purchase={mockedPurchase1}
			/>,
		);
		const productCard = screen.getByTestId("desktop");

		expect(productCard).toBeInTheDocument();
	});
});
