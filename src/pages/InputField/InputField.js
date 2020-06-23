import React from 'react';

class InputField extends React.Component {
    state = {
        checkerBoard: 8
    };

    handleChange = e => {
        this.setState({
            checkerBoard: this.handleChange
        });
    };

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
                        default="8"
                        value={this.state.checkerBoard}
                        onChange={this.handleChange}
                        onSubmit={this.handleSubmit}
                    >
                    </input>
                </div>
            </label>
        );
    };
}

export default InputField;