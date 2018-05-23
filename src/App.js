import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import finishes from './finishes'

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      score: 180,
      target: "Let's play"
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      score: event.target.value,
      target: finishes.calculate(event.target.value)
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

      </div>
    );
  }
}

export default App;
