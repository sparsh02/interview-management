import React from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import TextField from "@material-ui/core/TextField";
const containerStyle = {
  backgroundColor: "#90caf9",
  color: "#f44336",
  display: "inline-flex",
  alignItems: "center",
  fontWeight: "italic",
  fontSize: "1.5em",
  justifyContent: "space-around",
  padding: "0.75em 1em",
  width: "100%"
};
const inputStyle = {
  minWidth: "14em"
};

export default props => {
  return (
    <div style={containerStyle} id="titlebar">
      <div>Interview Creation Portal</div>
      <Button
        variant="contained"
        color="primary"
        startIcon={<AddIcon />}
        onClick={props.onShowFormClick}
        title={props.formVisible ? `Hide Form` : `Show Form`}
        disabled={props.formVisible}
      >
        Add Interview
      </Button>
    </div>
  );
};
