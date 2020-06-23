import React from 'react';

class InputField extends React.Component {
    state = {
        checkerBoard: 8

    }

    handleChange = e => {
        // e.preventDefault();
        // this.setState({
        //     this.handleCheckerBoard(this.state)
        // })
    }

    handleSubmit = e => {
        e.preventDefault();
    }


    render() {
        return (
            <input onChange={this.handleChange} onSubmit={this.handleSubmit} >
                {/* value={this.handleChange} */}

            </input>
        )
    }
}

export default InputField;