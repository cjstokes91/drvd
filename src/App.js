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
            <td class="unused"></td>
            <td class="used"><span></span></td>
            <td class="unused"></td>
            <td class="used"><span></span></td>
            <td class="unused"></td>
            <td class="used"><span></span></td>
            <td class="unused"></td>
            <td class="used"><span></span></td>
          </tr>
          <tr>
            <td class="used"><span></span></td>
            <td class="unused"></td>
            <td class="used"><span></span></td>
            <td class="unused"></td>
            <td class="used"><span></span></td>
            <td class="unused"></td>
            <td class="used"><span></span></td>
            <td class="unused"></td>
          </tr>
          <tr>
            <td class="unused"></td>
            <td class="used"><span></span></td>
            <td class="unused"></td>
            <td class="used"><span></span></td>
            <td class="unused"></td>
            <td class="used" ><span></span></td>
            <td class="unused"></td>
            <td class="used"><span></span></td>
          </tr>
          <tr>
            <td class="used"><span></span></td>
            <td class="unused"></td>
            <td class="used"><span></span></td>
            <td class="unused"></td>
            <td class="used"><span></span></td>
            <td class="unused"></td>
            <td class="used"><span></span></td>
            <td class="unused"></td>
          </tr>
          <tr>
            <td class="unused"></td>
            <td class="used"><span></span></td>
            <td class="unused"></td>
            <td class="used"><span></span></td>
            <td class="unused"></td>
            <td class="used"><span></span></td>
            <td class="unused"></td>
            <td class="used"><span></span></td>
          </tr>
          <tr>
            <td class="used"><span></span></td>
            <td class="unused"></td>
            <td class="used"><span></span></td>
            <td class="unused"></td>
            <td class="used"><span></span></td>
            <td class="unused"></td>
            <td class="used"><span></span></td>
            <td class="unused"></td>
          </tr>
          <tr>
            <td class="unused"></td>
            <td class="used"><span></span></td>
            <td class="unused"></td>
            <td class="used"><span></span></td>
            <td class="unused"></td>
            <td class="used"><span></span></td>
            <td class="unused"></td>
            <td class="used"><span></span></td>
          </tr>
          <tr>
            <td class="used"><span></span></td>
            <td class="unused"></td>
            <td class="used"><span></span></td>
            <td class="unused"></td>
            <td class="used"><span></span></td>
            <td class="unused"></td>
            <td class="used"><span></span></td>
            <td class="unused"></td>
          </tr>
        </table>
      </div>
    );
  }
}

export default App;
