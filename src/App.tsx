import React from "react";
import ProductCardInCartHistoryMobile from "./Components/ProductCardInCartHistory/mobile";
import ProductCardInCartHistory from "./Components/ProductCardInCartHistory/desktop";
import ProductCardInAnnouncementMobile from "./Components/ProductCardInAnnouncement/mobile";
import ProductCardInAnnouncement from "./Components/ProductCardInAnnouncement/desktop";
import HistoryCardMobile from "./Components/HistoryCard/mobile";
import HistoryCard from "./Components/HistoryCard/desktop";
import { WINDOW_SIZE_DESKTOP } from "./utils";

import { mockedProduct, mockedUser1, mockedPurchase1 } from "./utils/mocks";
const App: React.FC = () => {
	return (
		<>
			{window.innerWidth > WINDOW_SIZE_DESKTOP ? (
				<ProductCardInAnnouncement item={mockedProduct} />
			) : (
				<ProductCardInAnnouncementMobile item={mockedProduct} />
			)}
			{window.innerWidth > WINDOW_SIZE_DESKTOP ? (
				<ProductCardInCartHistory scenery="cart" item={mockedProduct} />
			) : (
				<ProductCardInCartHistoryMobile
					scenery="history"
					item={mockedProduct}
				/>
			)}

			{window.innerWidth > WINDOW_SIZE_DESKTOP ? (
				<HistoryCard seller={mockedUser1} purchase={mockedPurchase1} />
			) : (
				<HistoryCardMobile seller={mockedUser1} purchase={mockedPurchase1} />
			)}
		</>
	);
};

export default App;
