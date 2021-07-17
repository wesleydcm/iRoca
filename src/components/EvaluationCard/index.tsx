import RatingStars from "../RatingStars";
import type { IProductEvaluation, IUserEvaluation } from "../../@types";
import { Wrapper } from "./styles";
interface Props {
	evaluation: IProductEvaluation | IUserEvaluation;
	scenery: "desktop" | "mobile";
	"data-testid"?: string;
}
const EvaluationCard = ({
	evaluation,
	scenery = "desktop",
}: Props): JSX.Element => {
	const starSize = scenery === "desktop" ? "medium" : "small";
	return (
		<Wrapper>
			{evaluation.avaliatorName && evaluation.avaliatorImage && (
				<>
					<figure>
						<img
							src={evaluation.avaliatorImage}
							alt={evaluation.avaliatorName}
						/>

						<figcaption>{evaluation.avaliatorName}</figcaption>
					</figure>
					<section className="feedback">
						<h2>{evaluation.avaliatorName}</h2>
						<h3>"{evaluation.feedback}"</h3>
					</section>
					<section className="ratingStarFlag">
						<RatingStars
							readOnly={true}
							value={evaluation.grade}
							starSize={starSize}
						/>
					</section>
				</>
			)}
		</Wrapper>
	);
};
export default EvaluationCard;
