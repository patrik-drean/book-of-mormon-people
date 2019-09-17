import React from 'react';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Button from '@material-ui/core/Button';

const arrowStyle = {
    margin: "0 0 0 20px"
}

class NextArrow extends React.Component {

    render() {
        return (
            <Button variant="outlined" color="secondary" style={arrowStyle} onClick={this.props.changeCard}>
                <ArrowForwardIosIcon></ArrowForwardIosIcon>
            </Button>
        )
    }
}

export default NextArrow;