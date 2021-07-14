// import { useRef } from "react";
import type { ITreatedPurchase } from "../../../@types";
import HistoryCard from "../../../components/HistoryCard/mobile";
import { Wrapper } from "../styles";

interface Props {
  treatedPurchasesList: ITreatedPurchase[];
}

const MyPurchasesHistoryMobile = ({ treatedPurchasesList }: Props) => {
  // const ref = useRef(0);
  // console.log(ref.current++);

  return (
    <Wrapper>
      <h2>Histórico de compras</h2>
      <ul>
        {treatedPurchasesList.map(({ purchase, seller }) => {
          return (
            <HistoryCard
              key={purchase.id}
              purchase={purchase}
              seller={seller}
            />
          );
        })}
      </ul>
    </Wrapper>
  );
};

export default MyPurchasesHistoryMobile;
