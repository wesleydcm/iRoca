import React from "react";
import Rating from "@material-ui/lab/Rating";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { useState } from "react";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      "& > * + *": {
        marginTop: theme.spacing(1),
      },
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
  const [starsChecked, setStarsChecked] = useState<number | null>(value);

  return (
    <div className={classes.root}>
      {readOnly ? (
        <Rating
          name="rating"
          value={value}
          precision={0.01}
          size={starSize}
          readOnly
        />
      ) : (
        <Rating
          onChange={(event, newstarsChecked) => {
            setStarsChecked(newstarsChecked);
          }}
          name="rating"
          defaultValue={0}
          precision={1}
          size={starSize}
        />
      )}
    </div>
  );
}
