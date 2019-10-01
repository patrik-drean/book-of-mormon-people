import React from "react";
import { connect } from "react-redux";
import {
  changeCardPerson,
  changeCardSide,
  toggleQuizMode
} from "../../actions/actions";
import Card from "./Card";
import NextArrow from "./NextArrow";
import ToggleModeButton from "./ToggleModeButton";
import peopleData from "../../data/people_data";

const pageStyle = {
  textAlign: "center",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center"
};

const flexRowStyle = {
  display: "flex",
  flexDirection: "row"
};

const flexColumnStyle = {
  display: "flex",
  flexDirection: "column"
};

class FlashCardsPage extends React.Component {
  constructor(props) {
    super(props);

    const person = this.getRandomPerson();
    this.props.dispatch(changeCardPerson(person));
  }

  changeCard = event => {
    const fastFlipSpeed = 0.000001;
    this.props.dispatch(changeCardSide(false, fastFlipSpeed));
    this.props.dispatch(changeCardPerson(this.getRandomPerson()));
  };

  handleFlip = event => {
    const normalFlipSpeed = 0.6;
    this.props.dispatch(changeCardSide(!this.props.isFlipped, normalFlipSpeed));
  };

  getRandomPerson() {
    const min = Math.ceil(0);
    const max = Math.floor(peopleData.length);
    const randomIndex = Math.floor(Math.random() * (max - min)) + min;
    return peopleData[randomIndex];
  }

  toggleMode = event => {
    this.props.dispatch(toggleQuizMode(!this.props.isNameShownFirst));
    this.changeCard();
  };

  render() {
    return (
      <div style={pageStyle}>
        <div style={flexRowStyle}>
          <Card
            person={this.props.person}
            isFlipped={this.props.isFlipped}
            flipSpeed={this.props.flipSpeed}
            handleFlip={this.handleFlip}
            nameOrientation={this.props.nameOrientation}
            descriptionOrientation={this.props.descriptionOrientation}
          ></Card>
          <NextArrow changeCard={this.changeCard}></NextArrow>
        </div>
        <div style={flexColumnStyle}>
          <ToggleModeButton
            isNameShownFirst={this.props.isNameShownFirst}
            toggleMode={this.toggleMode}
          ></ToggleModeButton>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    person: state.person,
    isFlipped: state.isFlipped,
    flipSpeed: state.flipSpeed,
    isNameShownFirst: state.isNameShownFirst,
    nameOrientation: state.nameOrientation,
    descriptionOrientation: state.descriptionOrientation
  };
}

export default connect(mapStateToProps)(FlashCardsPage);
