import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import thinker from './thinker'
import Board from './board';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      score: 180,
      target: "Let's play",
      angle: 0,
      radius: 0,
      newScore: {}
    };

    this.board = new Board();

    this.handleChange = this.handleChange.bind(this);
    this.handleAngleChange = this.handleAngleChange.bind(this);
    this.handleRadiusChange = this.handleRadiusChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      score: event.target.value,
      target: thinker.calculate(event.target.value)
    });
  }

  handleAngleChange(event) {
    this.setState({
      angle: event.target.value,
      newScore: this.board.throw(event.target.value, this.state.radius)
    });
  }

  handleRadiusChange(event) {
    this.setState({
      radius: event.target.value,
      newScore: this.board.throw(this.state.angle, event.target.value)
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          You have {this.state.score} remaining
        </p>

          <input type="number" value={this.state.score} onChange={this.handleChange} />

        <h3>{this.state.target}</h3>

        <hr/>

        <h2>Throw</h2>

        Angle: <input type="number" value={this.state.angle} onChange={this.handleAngleChange} /> - 
        Radius: <input type="number" value={this.state.radius} onChange={this.handleRadiusChange} />

        <h3>{this.state.newScore.totalScore || "Let's Play!"}</h3>

      </div>
    );
  }
}

export default App;
