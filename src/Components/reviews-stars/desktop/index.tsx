import { Container, Star } from "./styles";
import { useState } from "react";
interface ReviewStarProps {
  starSize?: number;
}

const ReviewStar = ({ starSize = 50 }: ReviewStarProps) => {
  const colors = {
    gold: "#E7FA0A",
    gray: "#B5B5B5",
  };
  const stars = Array(5).fill(0);
  const [startsChecked, setstartsChecked] = useState<number>(0);
  const [starsHoverd, setHoverValue] = useState<number>(0);
  const handleClick = (value: number): void => {
    setstartsChecked(value);
  };

  const handleMouseHover = (newHoverValue: number): void => {
    setHoverValue(newHoverValue);
  };

  const handleMouseExit = (): void => {
    setHoverValue(0);
  };
  return (
    <Container>
      {stars.map((_, index) => (
        <Star
          key={index}
          size={starSize}
          onClick={() => handleClick(index + 1)}
          onMouseOver={() => handleMouseHover(index + 1)}
          onMouseLeave={handleMouseExit}
          color={
            (starsHoverd || startsChecked) > index ? colors.gold : colors.gray
          }
        />
      ))}
    </Container>
  );
};

export default ReviewStar;
