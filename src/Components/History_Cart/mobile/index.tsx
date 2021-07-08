import { Container, Information } from "../../../styles/history_cart_styles";
import FruitsImage from "../../../assets/images-mobile/fruits_image.svg";
import OrganicImage from "../../../assets/images-mobile/organic_flag.svg";

interface historyCartProps {
  organic: boolean;
}

const HistoryCartMobile = ({ organic }: historyCartProps) => {
  return (
    <Container>
      <div className="flag">
        <img
          src={OrganicImage}
          alt="organic_flag"
          className={`${organic === false ? "organic" : ""}`}
        />
      </div>

      <Information>
        <div className="image">
          <img src={FruitsImage} alt="Fruit_image" />
        </div>
        <div className="description">
          <p>Mussum Ipsum</p>
          <h3>10kg</h3>
        </div>
        <div className="price">
          <p>R$ 3,00/kg</p>
        </div>
      </Information>
    </Container>
  );
};

export default HistoryCartMobile;
