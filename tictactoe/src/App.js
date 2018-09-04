import React, { Component } from 'react';
import './App.css';
import Status from './components/Status'
//import logo from './logo.svg';
//import './App.css';

class App extends Component   {
  constructor(props) {
    super(props)
    this.state = {
      board : Array(9).fill(null),  
      player : null,
      winner : null,
      filled : false
    }
  }

  checkWinner() {
    let winLines = 
    [
      ["0", "1", "2"],
      ["3", "4", "5"], 
      ["6", "7", "8"], 
      ["0", "3", "6"], 
      ["1", "4", "7"],
      ["2", "5", "8"],
      ["0", "4", "8"], 
      ["2", "4", "6"], 

    ]
    this.checkMatch (winLines)
  }

  checkMatch(winLines) {

    for (let index = 0; index < winLines.length; index++) {
      const [a, b, c] = winLines[index];
      let board = this.state.board
      if(board[a] && board[a] === board[b]  && board[a] === board[c]) {
        alert('You won');
        this.setState ({
          winner: this.state.player
        })
      }
    }
  }

  checkFilled() {
    this.setState({ filled : true })
    for (let index = 0; index < this.state.board.length; index++) {
      if (this.state.board[index] === null) {
        this.setState({filled : false})
      }
    }
    if (this.state.winner) {
      this.setState({ filled : true})
    }
  }
  handleClick(index){
    if(this.state.player && !this.state.winner && !this.state.filled) {
      let newBoard = this.state.board
      if (this.state.board[index] === null) {
        newBoard[index] = this.state.player
        
        this.setState({
          board: newBoard,
          player: this.state.player === "X" ? "O" : "X"
        })
        this.checkWinner()
      }
    }
    if (!this.state.winner) {this.checkFilled()}

  }

  setPlayer(player) {
    this.setState({ player })
  }
  renderBoxes() {
    return this.state.board.map(
      (box, index) => 
        <div className="box" key={index} 
          onClick ={() => this.handleClick(index)}>
          {box}
        </div>
      )
  }

  reset() {
    this.setState({
      player: null,
      winner: null,
      board: Array(9).fill(null),
      filled: false
    })
  }
  render() {
    
    return (
      <div className="container">
        <h1> Tic Tac Toe App </h1>
        <Status 
          player = {this.state.player} 
          setPlayer ={(e) => this.setPlayer(e)}
          winner = {this.state.winner}
          filled = {this.state.filled}
        />
        <div className = "board">
          {this.renderBoxes()}
        </div>

        <button disabled = {!this.state.winner && !this.state.filled} onClick = {() => this.reset()}>
        Reset</button>

      </div>
    );
  }
}

export default App;
