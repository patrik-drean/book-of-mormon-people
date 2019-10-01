import React from "react";
import { Button } from "@material-ui/core";
import { BrowserRouter as Router, Link } from "react-router-dom";

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
        <Button
          component={Link}
          to="/learn"
          variant="outlined"
          color="secondary"
          style={buttonStyle}
        >
          Learn
        </Button>
        <Button
          component={Link}
          to="/quiz"
          variant="outlined"
          color="secondary"
          style={buttonStyle}
        >
          Quiz
        </Button>
      </div>
    );
  }
}

export default Nav;
