import React, { Component } from 'react';

import './App.css';
import 'typeface-roboto';

import Thinker from './thinker'
import Dartboard from './dartboard';
import DartboardUI from './dartboardUI';

import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

function Target(props) {
  return (<p>{props.target}</p>)
}

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

    this.dartboard = new Dartboard();
  }

  handleChange = name => (event, value) => {
    this.setState({
      [name]: value ? value : parseInt(event.target.value)
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Darts Opponent</h1>
        </header>

        <div className="board">
          <DartboardUI dartboard={this.dartboard} />
        </div>

        <p className="App-intro">
          You have {this.state.remaining} remaining
        </p>

          <input type="number" value={this.state.remaining} onChange={this.handleChange("remaining")} />

        <h3>{Thinker.calculate(this.state.remaining)}</h3>

        <hr/>

        <h2>Throw</h2>

        <form>
        Aim At: <input type="number" value={this.state.aimat} onChange={this.handleChange("aimat")} /> - 
        Multiplier: <input type="number" value={this.state.multi} onChange={this.handleChange("multi")} /> - 
        Difficulty: <input type="number" value={this.state.diff} onChange={this.handleChange("diff")} />
        </form>


        <Button
          variant="contained"
          color="primary"
          onClick={() => this.handleChange("score")(null, this.dartboard.throw(this.state.aimat, this.state.multi, this.state.diff))}>
          Throw
        </Button>

        <code>{JSON.stringify(this.state.score, 2, 2) || "Let's Play!"}</code>

      </div>
    );
  }
}

export default App;
