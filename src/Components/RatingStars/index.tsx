import Rating from "@material-ui/lab/Rating";
import { Dispatch, SetStateAction } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { useState, useEffect } from "react";
import { Container } from "./styles";
import StarRoundedIcon from "@material-ui/icons/StarRounded";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "row",
      "& > * + *": {},
    },
  })
);

interface ReviewStarProps {
  starSize?: "medium" | "large" | "small" | undefined;
  value?: number;
  readOnly?: boolean;
  setValue?: Dispatch<SetStateAction<number>>;
}

export default function RatingStars({
  value = 0,
  starSize = "small",
  readOnly = false,
  setValue,
}: ReviewStarProps) {
  const classes = useStyles();
  //   const [starsChecked, setStarsChecked] = useState<number | null>(value);
  //   useEffect(() => {
  // 	  if(value==u)
  //     setValue(starsChecked);
  //   }, [starsChecked]);
  return (
    <Container className={classes.root}>
      {readOnly ? (
        <>
          {!!value && <p>{value.toFixed(1)}</p>}
          <Rating
            name="rating"
            value={value}
            precision={0.1}
            size={starSize}
            icon={<StarRoundedIcon />}
            readOnly
          />
        </>
      ) : (
        <Rating
          onChange={(event, newStarsChecked) => {
            if (newStarsChecked !== undefined && newStarsChecked !== null) {
              if (setValue !== undefined) {
                setValue(newStarsChecked);
              }
            }
          }}
          name="rating"
          defaultValue={0}
          precision={1}
          size={starSize}
          icon={<StarRoundedIcon />}
        />
      )}
    </Container>
  );
}
