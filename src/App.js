import React from 'react';
import './App.css';


class App extends React.Component {
  state = {
    checkerBoard: 0
  };

  handleCheckerBoard = () => {

  }

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
      </div>
    );
  }
}

export default App;
