import React from "react";

import Feedback from "./Feedback.js";
import GuessForm from "./GuessForm.js";
import GuessCounter from "./GuessCounter.js";
import GuessHistory from "./GuessHistory.js";
import Nav from "./Nav.js";
import What from "./What.js";

export default class Game extends React.Component {
  constructor(props) {
    super(props);

    const secretNumber = Math.floor(Math.random() * 100) + 1;

    this.state = {
      secretNumber: secretNumber,
      recentGuess: "",
      guessHistory: [],
      guessCounter: 0,
      feedback: "Make your Guess!",
      what: false
    };
  };

  handleSubmit(data) {
    const guessHistory = this.state.guessHistory;
    guessHistory.push(data);
    console.log(guessHistory);
    console.log(this.state.secretNumber);
    const counter = this.state.guessCounter + 1;

    this.setState({
      recentGuess: data,
      guessCounter: counter,
      guessHistory: guessHistory
    });
    this.handleMessage(data);
  };

  handleMessage(guess) {
    const parsedGuess = parseInt(guess);
    const secret = this.state.secretNumber;
    if (parsedGuess === secret) {
      this.setState({
        feedback: "You got it!"
      });
    } else if (parsedGuess <= secret + 10 && parsedGuess >= secret - 10) {
      this.setState({
        feedback: "Hot!"
      });
    } else if (parsedGuess <= secret + 20 && parsedGuess >= secret - 20) {
      this.setState({
        feedback: "Warm!"
      });
    } else if (parsedGuess <= secret + 99 && parsedGuess >= secret - 99) {
      this.setState({
        feedback: "Cold!"
      });
    };
  };

  handleWhat(e) {
    e.preventDefault();
    this.setState({
      what: !this.state.what
    })
  }

  render() {
    const history = this.state.guessHistory;
    const newHistory = history.map((guess, index) =>
    <li key={index}>
      <GuessHistory guess={guess}/>
    </li>
    )

    if (this.state.what === true) {
      return (
        <What game={(e) => this.handleWhat(e)} />
      )
    } else {
    return (
      <React.Fragment>
        <header>
          <Nav what={(e) => this.handleWhat(e)}/>
        </header>
        <h1>Hot or Cold</h1>
        <section>
          <Feedback message={this.state.feedback} />
          <GuessForm onSubmit={(data) => this.handleSubmit(data)} />
          <GuessCounter counter={this.state.guessCounter} />
          <ul>{newHistory}</ul>
        </section>
      </React.Fragment>
    );
  }
  }
}
