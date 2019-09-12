import React from 'react';
import peopleData from '../../data/people_data'

const cardStyle = {
    width: '500px',
    height: '200px',
    border: '2px white solid',
}

class Card extends React.Component {
    constructor(props) {
        super(props);
        console.log(peopleData);
    }

    render() {
        return (
        <div style={cardStyle}>

        </div>
        )
    }
}

export default Card;