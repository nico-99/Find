import React from "react";
import Button from "./Button";

const AddButton = (props) => (
  <React.Fragment>
    <Button btn={`Agregar ${props.number}`} />
  </React.Fragment>
);

export default AddButton;
