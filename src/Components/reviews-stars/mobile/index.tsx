import { Container, Star } from "./styles";
import { useState } from "react";
interface ReviewStarProps {
  starSize?: number;
}

const ReviewStarMobile = ({ starSize = 50 }: ReviewStarProps) => {
  const colors = {
    gold: "#E7FA0A",
    gray: "#B5B5B5",
  };
  const stars = Array(5).fill(0);
  const [startsChecked, setstartsChecked] = useState<number>(0);

  const handleClick = (value: number): void => {
    setstartsChecked(value);
  };

  return (
    <Container>
      {stars.map((_, index) => (
        <Star
          key={index}
          size={starSize}
          onClick={() => handleClick(index + 1)}
          color={startsChecked > index ? colors.gold : colors.gray}
        />
      ))}
    </Container>
  );
};

export default ReviewStarMobile;
