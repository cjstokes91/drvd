import React from 'react';
import './App.css';
import InputField from './pages/InputField/InputField'
import TableData from './pages/TableData/TableData';

class App extends React.Component {
  state = {
    checkerBoard: 0,
    // newCheckerBoard: []
  };

  handleAddInput = () => {
    this.setState({
      checkerBoard: [...this.state.checkerBoard]
    });
  };

  // input that accepts number will setState
  // state will change the size of the board
  // another component that will pass the input from InputField to the TableData 

  // hard coded checkered board 
  // needs to be passed data from InputField

  render() {
    return (
      <div className="App">
        <InputField
          handleAddInput={this.handleAddInput}
        />
        <TableData />
      </div>
    );
  };
};
export default App;
