import React from 'react';
import {connect} from 'react-redux';
import Button from '@material-ui/core/Button';
import {changeCardPerson, changeCardSide, toggleQuizMode} from '../../actions/actions'
import Card from './Card';
import NextArrow from './NextArrow';
import ToggleModeButton from './ToggleModeButton';
import peopleData from '../../data/people_data';

const flexRowStyle = {
    display: 'flex',
    flexDirection: 'row'
}

const flexColumnStyle = {
    display: 'flex',
    flexDirection: 'column'
}

class FlashCardsPage extends React.Component {
    constructor(props) {
        super(props);

        console.log(this.props.nameOrientation);

        const person = this.getRandomPerson();
        this.props.dispatch(changeCardPerson(person));
    }

    changeCard = event => {
        event.preventDefault();

        const fastFlipSpeed = .000001;
        this.props.dispatch(changeCardSide(false, fastFlipSpeed));
        this.props.dispatch(changeCardPerson(this.getRandomPerson()));
    }

    handleFlip = event => {
        event.preventDefault();

        const normalFlipSpeed = .6;
        this.props.dispatch(changeCardSide(!this.props.isFlipped, normalFlipSpeed));
    }

    getRandomPerson() {
        const min = Math.ceil(0);
        const max = Math.floor(peopleData.length);
        const randomIndex = Math.floor(Math.random() * (max - min)) + min;
        return peopleData[randomIndex];
    }

    toggleMode = event => {
        event.preventDefault();
        this.props.dispatch(toggleQuizMode(!this.props.isNameShownFirst));
    }

    render() {
        return(
            <React.Fragment>
                <div style={flexRowStyle}>
                    <Card 
                        person={this.props.person} 
                        isFlipped={this.props.isFlipped}
                        flipSpeed={this.props.flipSpeed}
                        handleFlip={this.handleFlip}
                        nameOrientation={this.props.nameOrientation}
                        descriptionOrientation={this.props.descriptionOrientation}>
                    </Card>
                    <NextArrow changeCard={this.changeCard}></NextArrow>
                </div>
                <div style={flexColumnStyle}>
                    <ToggleModeButton 
                    isNameShownFirst={this.props.isNameShownFirst}
                    toggleMode={this.toggleMode}>
                    </ToggleModeButton>
                </div>
            </React.Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
        person: state.person,
        isFlipped: state.isFlipped,
        flipSpeed: state.flipSpeed,
        isNameShownFirst: state.isNameShownFirst,
        nameOrientation: state.nameOrientation,
        descriptionOrientation: state.descriptionOrientation,
    };
}

export default connect(mapStateToProps)(FlashCardsPage);