import RatingStars from "../RatingStars";
import { IEvaluationData } from "../../@types";
import { Wrapper } from "./styles";
interface Props {
  evaluation: IEvaluationData;
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
      <figure>
        <img
          src={
            evaluation.image
              ? evaluation.image
              : "https://i.imgur.com/02IXYej.png"
          }
          alt={evaluation.name}
        />
        <figcaption>{evaluation.name}</figcaption>
      </figure>
      <section className="feedback">
        <h2>{evaluation.name}</h2>
        <h3>"{evaluation.feedback}"</h3>
      </section>
      <section className="ratingStarFlag">
        <RatingStars
          readOnly={true}
          value={evaluation.grade}
          starSize={starSize}
        />
      </section>
    </Wrapper>
  );
};
export default EvaluationCard;
