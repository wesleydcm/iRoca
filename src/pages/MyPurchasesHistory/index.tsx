import { useUser } from "../../Providers/user";
import { useWindow } from "../../Providers/window";
import { errorToast, WINDOW_SIZE_DESKTOP } from "../../utils";
import MyPurchasesHistoryMobile from "./mobile";
import MyPurchasesHistoryDesktop from "./desktop";
import { IPurchase, IPurchaseSeller, ITreatedPurchase } from "../../@types";
import { useEffect, useMemo, useState } from "react";

interface Props {}

const MyPurchasesHistory = ({}: Props) => {
	const [purchasesList, setPurchasesList] = useState<IPurchase[]>([]);
	const { user, initController } = useUser();
	const { pageWidth } = useWindow();
	const controller = initController();

	useEffect(() => {
		controller
			.getPurchasesOfUser(user.personalData.id)
			.then(response => {
				hasUniqueSeller(response);
				setPurchasesList(response);
			})
			.catch(error => errorToast(error));
		// eslint-disable-next-line
	}, []);

	const hasUniqueSeller = (purchasesList: IPurchase[] | undefined): void => {
		if (!!purchasesList && purchasesList.length) {
			const sellerId = purchasesList[0].sellerId;

			purchasesList.forEach(purchase => {
				if (purchase.sellerId !== sellerId) {
					throw new Error("Has more thar one seller into this purchase.");
				}
			});
		}
	};

	const treatPurchasesList = (
		purchasesList: IPurchase[],
	): ITreatedPurchase[] => {
		if (!!purchasesList && purchasesList.length) {
			const result: ITreatedPurchase[] = [];
			const { sellerId } = purchasesList[0];

			purchasesList.forEach(purchase => {
				const treatedPurchase: ITreatedPurchase = {} as ITreatedPurchase;
				treatedPurchase.purchase = purchase;

				controller.getUser(sellerId).then((response: IPurchaseSeller) => {
					treatedPurchase.seller = {
						id: response.id,
						name: response.name,
						cpf: response.cpf,
						email: response.email,
						phone: response.phone,
					};
				});

				result.push(treatedPurchase);
			});

			return result;
		}
		return [];
	};

	const treatedPurchasesList = useMemo(() => {
		console.log(`raw purchasesList:>>`, purchasesList);

		return treatPurchasesList(purchasesList);
	}, [purchasesList]);

	console.log(`treatedPurchasesList`, treatedPurchasesList);

	return (
		<>
			{pageWidth < WINDOW_SIZE_DESKTOP ? (
				<MyPurchasesHistoryMobile purchasesList={[]} />
			) : (
				<MyPurchasesHistoryDesktop />
			)}
		</>
	);
};

export default MyPurchasesHistory;
