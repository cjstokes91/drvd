import React from 'react';

class InputField extends React.Component {
    state = {
        checkerBoard: 8
    };

    // handleChange will set the state for the size of the board 
    handleChange = e => {
        this.setState({
            checkerBoard: this.handleChange
        });
    };

    // handleSubmit will handle the input submit
    handleSubmit = e => {
        e.preventDefault();
        this.props.handleCheckerBoard(this.state.checkerBoard)
    };

    render() {
        return (
            <label>
                Enter Number :
                <div>
                    <input
                        value={this.handleChange}
                        onSubmit={this.handleSubmit}
                    >
                    </input>
                </div>
            </label>
        );
    };
}
export default InputField;