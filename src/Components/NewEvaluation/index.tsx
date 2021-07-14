import RatingStars from "../RatingStars";
import { Dispatch, SetStateAction } from "react";
import Button from "../../Components/Button";
import { Container, CloseButton, SkipButton, BlurBackground } from "./styles";
import { useState } from "react";

interface NewEvaluationProps {
	isOpened: boolean;
	setIsOpened: Dispatch<SetStateAction<boolean>>;
	evaluationTarget: "product" | "producer";
	handleSubmit: (feedback: string) => void;
}

const NewEvaluation = ({
	isOpened,
	setIsOpened,
	evaluationTarget,
	handleSubmit,
}: NewEvaluationProps) => {
	const [feedback, setFeedback] = useState<string>("");
	const [value, setValue] = useState<number>(0);

	return (
		<>
			{isOpened && (
				<BlurBackground>
					<section>
						<Container>
							{evaluationTarget === "product" ? (
								<h2>Como foi a qualidade dos produtos?</h2>
							) : (
								<h2>Como você avalia o produtor?</h2>
							)}

							<CloseButton onClick={() => setIsOpened(false)}>X</CloseButton>

							<RatingStars
								readOnly={false}
								value={value}
								setValue={setValue}
							></RatingStars>
							<h2>Se quiser, podes dar um feedback:</h2>
							<input onChange={e => setFeedback(e.target.value)}></input>
							<Button color={"green"} onClick={() => handleSubmit(feedback)}>
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
