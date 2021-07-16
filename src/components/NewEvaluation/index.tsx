import RatingStars from "../RatingStars";
import { Dispatch, SetStateAction } from "react";
import Button from "../../components/Button";
import { IProduct, IEvaluation, IProductEvaluation } from "../../@types";
import { useUser } from "../../providers/user";
import {
  Container,
  CloseButton,
  SkipButton,
  BlurBackground,
  ContainerProducer,
} from "./styles";
import { useState } from "react";

interface NewEvaluationProps {
  isOpened: boolean;
  setIsOpened: Dispatch<SetStateAction<boolean>>;
  evaluationTarget: "product" | "producer";
  handleSubmit: (feedback: string) => void;
  item: IProduct;
}

const Motion = {
  hidden: {
    x: +100,
    opacity: 0,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "tween",
      delay: 0.2,
      duration: 1,
    },
  },
};

const NewEvaluation = ({
  isOpened,
  setIsOpened,
  evaluationTarget,
  handleSubmit,
  item,
}: NewEvaluationProps) => {
  const [feedbackProduct, setFeedbackProduct] = useState<string>("");
  const [productRating, setProductRating] = useState<number>(0);
  const [feedbackProducer, setFeedbackProducer] = useState<string>("");
  const [producerRating, setProducerRating] = useState<number>(0);
  const [firstEvaluation, setFirstEvaluation] = useState<boolean>(false);
  const { user, initController } = useUser();

  const controller = initController();

  const submitProductEvaluation = () => {
    const newProductEvaluation: IProductEvaluation = {
      userId: user.personalData.id,
      productId: item.id,
      date: new Date().toDateString(),
      feedback: feedbackProduct,
      grade: productRating,
    };
    console.log("abc", newProductEvaluation)
    controller.createProductEvaluation(user.token, newProductEvaluation);
    setFirstEvaluation(true);
  };

  const submitProducerEvaluation = () => {
    const NewProducerEvaluation: IEvaluation = {
      userId: item.userId,
      evaluatorId: user.personalData.id,
      date: new Date().toDateString(),
      feedback: feedbackProducer,
      grade: producerRating,
    };
    console.log("abc", NewProducerEvaluation)
    controller.createProductorEvaluation(user.token, NewProducerEvaluation);
    setIsOpened(false);
  };
  return (
    <>
      {isOpened && (
        <BlurBackground>
          {!firstEvaluation ? (
            <section>
              <Container variants={Motion} initial="hidden" animate="visible">
                <h2>Dê uma nota para os produtos?</h2>

                <CloseButton onClick={() => setIsOpened(false)}>X</CloseButton>

                <RatingStars
                  readOnly={false}
                  value={productRating}
                  setValue={setProductRating}
                ></RatingStars>

                <h2>Se desejar, dê um feedback:</h2>
                <input
                  onChange={(e) => setFeedbackProduct(e.target.value)}
                ></input>
                <Button
                  color={"green"}
                  onClick={submitProductEvaluation}
                  disabled={!productRating}
                >
                  Enviar avaliação
                </Button>
                <SkipButton onClick={() => setFirstEvaluation(true)}>
                  Pular
                </SkipButton>
              </Container>
            </section>
          ) : (
            <section>
              <ContainerProducer
                variants={Motion}
                initial="hidden"
                animate="visible"
              >
                <h2>Como você avalia o produtor?</h2>

                <CloseButton onClick={() => setIsOpened(false)}>X</CloseButton>

                <RatingStars
                  readOnly={false}
                  value={producerRating}
                  setValue={setProducerRating}
                ></RatingStars>

                <h2>Se quiser, pode dar um feedback:</h2>
                <input
                  onChange={(e) => setFeedbackProducer(e.target.value)}
                ></input>
                <Button
                  color={"green"}
                  onClick={submitProducerEvaluation}
                  disabled={!producerRating}
                >
                  Enviar avaliação
                </Button>
                <SkipButton onClick={() => setIsOpened(false)}>
                  Pular
                </SkipButton>
              </ContainerProducer>
            </section>
          )}
        </BlurBackground>
      )}
    </>
  );
};

export default NewEvaluation;
