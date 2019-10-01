import React from "react";
import ReactCardFlip from "react-card-flip";

const cardStyle = {
  width: "60vh",
  height: "25vh",
  verticalAlign: "middle",
  padding: "5px"
};

const nameCardStyle = {
  ...cardStyle,
  border: "2px blue solid"
};

const descriptionCardStyle = {
  ...cardStyle,
  border: "2px green solid"
};

const cardTextStyle = {
  height: "25vh",
  textAlign: "center",
  verticalAlign: "middle"
};

class Card extends React.Component {
  render() {
    return (
      <ReactCardFlip
        isFlipped={this.props.isFlipped}
        flipDirection="vertical"
        flipSpeedBackToFront={this.props.flipSpeed}
        flipSpeedFrontToBack={this.props.flipSpeed}
      >
        <div
          key={this.props.nameOrientation}
          style={nameCardStyle}
          onClick={this.props.handleFlip}
        >
          <p style={cardTextStyle}>{this.props.person.description}</p>
        </div>

        <div
          key={this.props.descriptionOrientation}
          style={descriptionCardStyle}
          onClick={this.props.handleFlip}
        >
          <p style={cardTextStyle}>{this.props.person.name}</p>
        </div>
      </ReactCardFlip>
    );
  }
}

export default Card;
