import React, { Component } from 'react';
import TicTacToe from './tictactoe';
import './App.css';

class App extends Component {
  render() {
  return (
    <div className="App">
      <TicTacToe/>
      <Display />
      </div>
  );
}
}
function Display () {
    return (
      <div className="display">
      <div className="header">
        Tic-Tac-🤖
      </div>  
      <div className="links">by <a href="https://eeshashetty.github.io" target="_blank" rel="noopener noreferrer">@eeshashetty</a></div>
      <div className="msg">~ the first move takes a while to load, pls bear with it ~</div>
      </div>
    );
  }

export default App;
