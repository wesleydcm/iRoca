import RatingStar from "../reviews-stars";
import { EvaluationData } from "../../@types";
import { Wrapper } from "./styles";
interface Props {
  evaluation: EvaluationData;
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
        <img src={evaluation.image} alt="evaluatorPhoto" />
        <figcaption>{evaluation.name}</figcaption>
      </figure>
      <section className="feedback">
        <h2>{evaluation.name}</h2>
        <h3>"{evaluation.feedback}"</h3>
      </section>
      <section className="ratingStarFlag">
        <RatingStar
          readOnly={true}
          value={evaluation.grade}
          starSize={starSize}
        />
      </section>
    </Wrapper>
  );
};
export default EvaluationCard;
