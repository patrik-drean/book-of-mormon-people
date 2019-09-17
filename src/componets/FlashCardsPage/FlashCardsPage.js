import React from 'react';
import {connect} from 'react-redux';
import {changeCardPerson, changeCardSide} from '../../actions/actions'
import Card from './Card';
import NextArrow from './NextArrow';
import peopleData from '../../data/people_data';

const pageStyle = {
    display: 'flex',
    flexDirection: 'row'
}

class FlashCardsPage extends React.Component {
    constructor(props) {
        super(props);

        this.props.dispatch(changeCardPerson(this.getRandomPerson()));
    }

    getRandomPerson() {
        const min = Math.ceil(0);
        const max = Math.floor(peopleData.length);
        const randomIndex = Math.floor(Math.random() * (max - min)) + min;
        return peopleData[randomIndex]
    }

    changeCard = event => {
        event.preventDefault();

        const fastFlipSpeed = .001;
        this.props.dispatch(changeCardSide(false, fastFlipSpeed));
        this.props.dispatch(changeCardPerson(this.getRandomPerson()));
    }

    handleFlip = event => {
        event.preventDefault();

        const normalFlipSpeed = .6;
        this.props.dispatch(changeCardSide(!this.props.isFlipped, normalFlipSpeed));
    }

    render() {
        return(
            <div style={pageStyle}>
                <Card 
                    person={this.props.person} 
                    isFlipped={this.props.isFlipped}
                    flipSpeed={this.props.flipSpeed}
                    handleFlip={this.handleFlip}>
                </Card>
                <NextArrow 
                    changeCard={this.changeCard}>
                </NextArrow>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        person: state.person,
        isFlipped: state.isFlipped,
        flipSpeed: state.flipSpeed
    };
}

export default connect(mapStateToProps)(FlashCardsPage);