import RatingStars from "../RatingStars";
import { Dispatch, SetStateAction } from "react";
import Button from "../../components/Button";
import {
	Container,
	CloseButton,
	SkipButton,
	BlurBackground,
	ContainerProducer,
} from "./styles";
import { useState } from "react";
import { IEvaluation } from "../../@types";

interface NewEvaluationProps {
	isOpened: boolean;
	setIsOpened: Dispatch<SetStateAction<boolean>>;
	evaluationTarget: "product" | "producer";
	handleSubmit: (feedback: IEvaluation[]) => void;
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

const Motion2 = {
	hidden: {
		x: -100,
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
}: NewEvaluationProps) => {
	const [feedbackProduct, setFeedbackProduct] = useState<string>("");
	const [productRating, setProductRating] = useState<number>(0);
	const [feedbackProducer, setFeedbackProducer] = useState<IEvaluation[]>([]);
	const [producerRating, setProducerRating] = useState<number>(0);
	const [firstEvaluation, setFirstEvaluation] = useState<boolean>(false);

	return (
		<>
			{isOpened && (
				<BlurBackground>
					{!firstEvaluation ? (
						<section>
							<Container variants={Motion} initial="hidden" animate="visible">
								<h2>Como foi a qualidade dos produtos?</h2>

								<CloseButton onClick={() => setIsOpened(false)}>X</CloseButton>

								<RatingStars
									readOnly={false}
									value={productRating}
									setValue={setProductRating}
								></RatingStars>

								<h2>Se quiser, podes dar um feedback:</h2>
								<input
									onChange={e => setFeedbackProduct(e.target.value)}
								></input>
								<Button
									color={"green"}
									onClick={() => setFirstEvaluation(true)}
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
								variants={Motion2}
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
									onChange={e => setFeedbackProducer(e.target.value)}
								></input>
								<Button
									color={"green"}
									onClick={() => handleSubmit(feedbackProducer)}
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
