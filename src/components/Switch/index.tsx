import React from "react";
import { withStyles } from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

const CreateProductSwitch = withStyles({
  switchBase: {
    color: "gray",
    "&$checked": {
      color: "green"
    },
    "&$checked + $track": {
      backgroundColor: "green",
    },
  },
  checked: {},
  track: {},
})(Switch);

interface Props {
    state:{["checkedA"]: boolean}, 
    setState:React.Dispatch<React.SetStateAction<{checkedA: boolean;}>>, 
}

 const ProductSwitch = ({state, setState}:Props) => {
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
      <FormControlLabel
        label= "Orgânico"
        control={
          <CreateProductSwitch
            checked={state.checkedA}
            onChange={handleChange}
            name="checkedA"
          />
        }
      />
  );
}

export default ProductSwitch;















