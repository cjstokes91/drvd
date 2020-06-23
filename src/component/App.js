import React from 'react';
import './App.css';


class App extends React.Component {
  state = {
    checkerboard: 0
  };

  render() {
    return (
      <div className="App">
        <div>
          checkerboard
          </div>
        <table>
          <tr>
            <td>kns</td>
            <td>mkl</td>
          </tr>
          <tr>
            <td>kns</td>
            <td>mkl</td>
          </tr>
          <tr>
            <td>kns</td>
            <td>mkl</td>
          </tr>
          <tr>
            <td>kns</td>
            <td>mkl</td>
          </tr>
          <tr>
            <td>kns</td>
            <td>mkl</td>
          </tr>
        </table>
      </div>
    );
  }
}

export default App;
