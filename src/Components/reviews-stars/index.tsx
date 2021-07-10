import React from "react";
import Rating from "@material-ui/lab/Rating";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { useState } from "react";
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
}

export default function RatingStar({
  value = 0,
  starSize = "small",
  readOnly = false,
}: ReviewStarProps) {
  const classes = useStyles();
  // eslint-disable-next-line
  const [starsChecked, setStarsChecked] = useState<number | null>(value);

  return (
    <Container className={classes.root}>
      {readOnly ? (
        <>
          <p>{value.toFixed(1)}</p>
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
          // eslint-disable-next-line
          onChange={(event, newstarsChecked) => {
            setStarsChecked(newstarsChecked);
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
