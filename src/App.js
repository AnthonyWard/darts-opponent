import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import thinker from './thinker'
import Dartboard from './dartboard';
import DartboardUI from './dartboardUI';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      remaining: 180,
      target: "Let's play",
      aimat: 20,
      multi: 3,
      diff: 30,
      score: {}
    };

    this.board = new Dartboard();

    this.handleChange = this.handleChange.bind(this);
    this.handleThrow = this.handleThrow.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      remaining: event.target.value,
      target: thinker.calculate(event.target.value)
    });
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: parseInt(value)
    });
  }

  handleThrow() {
    console.log("throw");
    this.setState({
      score: this.board.throw(this.state.aimat, this.state.multi, this.state.diff)
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Darts Opponent</h1>
        </header>

        <div className="board">
        <DartboardUI />
        </div>

        <p className="App-intro">
          You have {this.state.remaining} remaining
        </p>

          <input type="number" value={this.state.remaining} onChange={this.handleChange} />

        <h3>{this.state.target}</h3>

        <hr/>

        <h2>Throw</h2>

        <form>
        Aim At: <input type="number" name="aimat" value={this.state.aimat} onChange={this.handleInputChange} /> - 
        Multiplier: <input type="number" name="multi" value={this.state.multi} onChange={this.handleInputChange} /> - 
        Difficulty: <input type="number" name="diff" value={this.state.diff} onChange={this.handleInputChange} />
        </form>

        <button name="throw" onClick={this.handleThrow}>Throw</button> <br/>

        <code>{JSON.stringify(this.state.score, null, 2) || "Let's Play!"}</code>

      </div>
    );
  }
}

export default App;
