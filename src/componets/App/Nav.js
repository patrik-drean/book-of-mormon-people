import React from "react";
import { ButtonGroup, Button } from "@material-ui/core";

const buttonGroupStyle = {
  margin: "10px"
};

const buttonStyle = {
  margin: "5px",
  padding: "5px 20px",
  width: "100px"
};

class Nav extends React.Component {
  render() {
    return (
      <div style={buttonGroupStyle}>
        <Button variant="outlined" color="secondary" style={buttonStyle}>
          Learn
        </Button>
        <Button variant="outlined" color="secondary" style={buttonStyle}>
          Quiz
        </Button>
      </div>
    );
  }
}

export default Nav;
