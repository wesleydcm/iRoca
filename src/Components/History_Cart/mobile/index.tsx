import { Container, Information } from "../../../styles/history_cart_styles";
import FruitsImage from "../../../assets/images-mobile/fruits_image.svg";
import OrganicImage from "../../../assets/images-mobile/organic_flag.svg";

const HistoryCartMobile = () => {
  return (
    <Container>
      <div className="flag">
        <img src={OrganicImage} alt="organic_flag" />
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
