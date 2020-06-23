import React from 'react';
import './App.css';
import InputField from './pages/InputField/InputField'
import TableData from './pages/TableData/TableData';

class App extends React.Component {
  state = {
    checkerBoard: 8
  };
  //    // handleChange will set the state for the size of the board 
  //    handleChange = e => {
  //     this.setState({
  //         checkerBoard: this.handleChange
  //     });
  // };

  // // handleSubmit will handle the input submit
  // handleSubmit = e => {
  //     e.preventDefault();
  //     this.props.handleCheckerBoard(this.state.checkerBoard)
  // };

  // input that accepts number will setState
  // state will change the size of the board
  // another component that will pass the input from InputField to the TableData 

  // hard coded checkered board 
  // needs to be passed data from InputField
  render() {
    return (
      <div className="App">
        <table id="board">
          <tr>
            <td className="unused"></td>
            <td className="used"><span></span></td>
            <td className="unused"></td>
            <td className="used"><span></span></td>
            <td className="unused"></td>
            <td className="used"><span></span></td>
            <td className="unused"></td>
            <td className="used"><span></span></td>
          </tr>
          <tr>
            <td className="used"><span></span></td>
            <td className="unused"></td>
            <td className="used"><span></span></td>
            <td className="unused"></td>
            <td className="used"><span></span></td>
            <td className="unused"></td>
            <td className="used"><span></span></td>
            <td className="unused"></td>
          </tr>
          <tr>
            <td className="unused"></td>
            <td className="used"><span></span></td>
            <td className="unused"></td>
            <td className="used"><span></span></td>
            <td className="unused"></td>
            <td className="used" ><span></span></td>
            <td className="unused"></td>
            <td className="used"><span></span></td>
          </tr>
          <tr>
            <td className="used"><span></span></td>
            <td className="unused"></td>
            <td className="used"><span></span></td>
            <td className="unused"></td>
            <td className="used"><span></span></td>
            <td className="unused"></td>
            <td className="used"><span></span></td>
            <td className="unused"></td>
          </tr>
          <tr>
            <td className="unused"></td>
            <td className="used"><span></span></td>
            <td className="unused"></td>
            <td className="used"><span></span></td>
            <td className="unused"></td>
            <td className="used"><span></span></td>
            <td className="unused"></td>
            <td className="used"><span></span></td>
          </tr>
          <tr>
            <td className="used"><span></span></td>
            <td className="unused"></td>
            <td className="used"><span></span></td>
            <td className="unused"></td>
            <td className="used"><span></span></td>
            <td className="unused"></td>
            <td className="used"><span></span></td>
            <td className="unused"></td>
          </tr>
          <tr>
            <td className="unused"></td>
            <td className="used"><span></span></td>
            <td className="unused"></td>
            <td className="used"><span></span></td>
            <td className="unused"></td>
            <td className="used"><span></span></td>
            <td className="unused"></td>
            <td className="used"><span></span></td>
          </tr>
          <tr>
            <td className="used"><span></span></td>
            <td className="unused"></td>
            <td className="used"><span></span></td>
            <td className="unused"></td>
            <td className="used"><span></span></td>
            <td className="unused"></td>
            <td className="used"><span></span></td>
            <td className="unused"></td>
          </tr>
        </table>
        <InputField />
      </div>
    );
  };
};
export default App;
