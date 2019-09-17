import React from 'react';
import Button from '@material-ui/core/Button';

const toggleModeSytle = {
    margin: '40px 0 0 0',
}

class ToggleModeButton extends React.Component {

    render() {
        return(
            <Button 
                style={toggleModeSytle} 
                variant="outlined" 
                color="secondary"
                onClick={this.props.toggleMode}
            >
                Switch to {this.props.isNameShownFirst ? "Description" : "Name"} First
            </Button>
        )

    }
}

export default ToggleModeButton;