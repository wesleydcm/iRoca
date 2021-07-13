import type { IPurchase, IUser } from "../../../@types";
import HistoryCard from "../../../Components/HistoryCard/desktop";
import { Wrapper } from "../styles";

interface Props {
	purchasesList: IPurchase[];
}

const MyPurchasesHistoryMobile = ({ purchasesList }: Props) => {
	return (
		<Wrapper>
			<h2>Histórico de compras</h2>
			<ul>
				{purchasesList.map(item => (
					<HistoryCard key={item.id} purchase={item} seller={{} as IUser} />
				))}
			</ul>
		</Wrapper>
	);
};

export default MyPurchasesHistoryMobile;
