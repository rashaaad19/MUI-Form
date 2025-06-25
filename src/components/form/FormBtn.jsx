import { Button } from "@mui/material";
import React from "react";
const FormBtn = ({ color, backgroundColor, borderColor = "white", text }) => {
  console.log(borderColor);
  const btnStyles = {
    backgroundColor: backgroundColor,
    color: { color },
    borderRadius: "0px",
    border:` 1px solid ${borderColor}`,

    "&:hover": {
      backgroundColor: color,
      color: backgroundColor,
    },
  };

  return (
    <Button variant="contained" sx={btnStyles}>
      {text}
    </Button>
  );
};

export default FormBtn;
