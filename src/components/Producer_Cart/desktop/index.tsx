import { Container, Card } from "../styles";
import { useHistory } from "react-router-dom";
import RatingStar from "../../RatingStars";
import { useUser } from "../../../providers/user";
import { useState, useEffect } from "react";
import { IUserInfo } from "../../../@types";
import Loading from "../../Loading";

interface Props {
  producerId: number;
  average: number;
}
const ProducerCartDesktop = ({ producerId, average }: Props): JSX.Element => {
  const history = useHistory();
  const { initController } = useUser();
  const controller = initController();
  const [producer, setProducer] = useState<IUserInfo>();
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setLoad(true);
    producerId &&
      controller.getUser(Number(producerId)).then((response) => {
        setProducer(response);
        setLoad(false);
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [producerId]);

  const handleClick = () => {
    history.push(`/profile/${producerId}`);
  };

  return (
    <Container onClick={handleClick} className="producer">
      {load ? (
        <Loading size={90} />
      ) : (
        <Card>
          <div className="information">
            <div className="name">
              <h3>Nome</h3>
              <p>{producer?.name}</p>
            </div>
            <div className="localization">
              <h3>Localização</h3>
              <p>{producer?.address.state}</p>
            </div>
            <div className="localization">
              <h3>Contato</h3>
              <div className="contact">
                <p>telefone: {producer?.phone}</p>
                <p>email: {producer?.email}</p>
              </div>
            </div>
          </div>
          <div className="image">
            <RatingStar readOnly={true} value={average} />
          </div>
        </Card>
      )}
    </Container>
  );
};

export default ProducerCartDesktop;
