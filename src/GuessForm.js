import React from "react";

export default class Guess extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
    }
  }

  handleInput(e) {
    const val = e.target.value;
    this.setState({
      value: val
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.value);
    this.setState({
      value: ""
    })
  }

  render() {
    return (
      <form className="" onSubmit={(e) => this.handleSubmit(e)}>
        <input
          type="text"
          maxLength="3"
          placeholder="Enter your Guess"
          id="userGuess"
          className="text"
          onChange={(e) => this.handleInput(e)}
          value={this.state.value}
          required
        />
        <input
          type="submit"
          name="submit"
          value="Guess"
          id="guessButton"
          className="button"
        />
      </form>
    )
  }
}
