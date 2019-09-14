import React from 'react';
import peopleData from '../../data/people_data';
import ReactCardFlip from 'react-card-flip';

const cardStyle = {
    width: '60vh',
    height: '25vh',
    border: '2px white solid',
}

const cardTextStyle = {
    height: '25vh',
    textAlign: 'center'
}

class Card extends React.Component {
    constructor(props) {
        super(props);

        const randomNum = this.getRandomIndex()
        this.state = {
            isFlipped: false,
            person: peopleData[randomNum]
        }
        console.log(peopleData);
    }

    getRandomIndex() {
        const min = Math.ceil(0);
        const max = Math.floor(peopleData.length);
        return Math.floor(Math.random() * (max - min)) + min
    }

    handleFlip = (e) => {
        e.preventDefault();
        this.setState(prevState => ({isFlipped: !prevState.isFlipped}));
    }

    render() {
        return (
            <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
                <div key="front" style={cardStyle} onClick={this.handleFlip}>
                    {this.state.person.description}
                </div>

                <div key="back" style={cardStyle} onClick={this.handleFlip}>
                    {this.state.person.name}
                </div>
            </ReactCardFlip>
        )
    }
}

export default Card;

// State: 
//      isFlipped
//      index