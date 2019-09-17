import React from 'react';
import ReactCardFlip from 'react-card-flip';

const cardStyle = {
    width: '60vh',
    height: '25vh',
    border: '2px white solid',
    verticalAlign: 'middle',
}

const cardTextStyle = {
    height: '25vh',
    textAlign: 'center',
    verticalAlign: 'middle'
}

class Card extends React.Component {

    render() {
        return (
            <ReactCardFlip 
                isFlipped={this.props.isFlipped} 
                flipDirection="vertical" 
                flipSpeedBackToFront={this.props.flipSpeed} 
                flipSpeedFrontToBack={this.props.flipSpeed}
            >
                <div key="front" style={cardStyle} onClick={this.props.handleFlip}>
                    <p style={cardTextStyle} >{this.props.person.description}</p>
                </div>

                <div key="back" style={cardStyle} onClick={this.props.handleFlip}>
                    <p style={cardTextStyle} >{this.props.person.name}</p>
                </div>
            </ReactCardFlip>
        )
    }
}

export default Card;

// Next Arrow
    // Switch on space bar and arrow key
    // Better transition 
// Switch to quiz or practice
// Switch name & description