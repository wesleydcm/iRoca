import RatingStars from "../RatingStars";
import { Dispatch, SetStateAction } from "react";
import Button from "../../Components/Button";
import { Container, CloseButton, SkipButton, BlurBackground } from "./styles";
import { useState } from "react";

interface NewEvaluationProps {
  isOpened: boolean;
  setIsOpened: Dispatch<SetStateAction<boolean>>;
}

const NewEvaluation = ({ isOpened, setIsOpened }: NewEvaluationProps) => {
  const [feedback, setFeedback] = useState<string>("");
  const [value, setValue] = useState<number>(0);
  const handleSubmit = () => {};
  return (
    <>
      {isOpened && (
        <BlurBackground>
          <section>
            <Container>
              <h2>Como foi a qualidade dos produtos?</h2>
              <CloseButton onClick={() => setIsOpened(false)}>X</CloseButton>

              <RatingStars
                readOnly={false}
                value={value}
                setValue={setValue}
              ></RatingStars>
              <h2>Se quiser também pode dar um feedback!</h2>
              <input onChange={(e) => setFeedback(e.target.value)}></input>
              <Button color={"green"} onClick={() => handleSubmit()}>
                Enviar avaliação
              </Button>
              <SkipButton onClick={() => setIsOpened(false)}>Pular</SkipButton>
            </Container>
          </section>
        </BlurBackground>
      )}
    </>
  );
};

export default NewEvaluation;
