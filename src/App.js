// Create a guessing game app in React.//

// When the page loads, display a header that says Start Game and underneath that have two buttons.//
// One button should read Standard and the other should read Expert.
//If the user clicks Standard, randomly generate a number between 1 and 10 for the user to guess. Expert should be between 1 and 100. Once either of these buttons is clicked, the game starts.

// There should be an input for the user to guess a number and submit.

// There should be a place that shows how many guesses they have made.

// Once the user guesses, tell them whether their guess was too high or too low.

// Once the user wins, display a message telling them that they have won and how many guesses it took.

// Keep track of the least number of tries it takes the user to win. This is the "High Score". If the user beats their high score, congratulate them.

// Keep separate track of the high score for the standard and expert levels.

// Have a reset button if the user gets tired of trying.

import React, { Component } from "react";

import "./App.css";

import Form from "./Form/Form";
import Button from "./Button/Button";
// import Footer from "./Footer/Footer";

// import GameReset from "./Game Reset/GameReset";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameActive: "",
      inputValue: null,

      randomNumGenerated: null,
      newValueEntry: " ",
      alert: "",

      userAttempts: 1,
      standardHighScore: 0,
      standardGamesPlayed: 0,
      expertHighScore: 0,
      expertGamesPlayed: 0
    };
  }

  handleInput = e => {
    e.preventDefault();
    let userInput = document.getElementById("theirInput").value;
    this.setState({ inputValue: userInput }, () => {
      this.compareNum();
    });
    this.setState({ newValueEntry: userInput });
  };

  compareNum = () => {
    if (Number(this.state.inputValue) === this.state.randomNumGenerated) {
      this.setState({
        alert: `Congrats, you won!! It took you ${this.state.userAttempts} ${
          this.state.userAttempts === 1 ? "guess" : "guesses"
        }!`
      });
      this.highScoreHandler();
    } else if (Number(this.state.inputValue) > this.state.randomNumGenerated) {
      this.setState({
        alert: "GO LOWER!",
        userAttempts: this.state.userAttempts + 1
      });
    } else if (Number(this.state.inputValue) < this.state.randomNumGenerated) {
      this.setState({
        alert: "GO HIGHER!",
        userAttempts: this.state.userAttempts + 1
      });
    }
  };

  standardRandomNumGen = () => {
    this.resetDefaults();
    let ranNum = Math.floor(Math.random() * 10) + 1;
    this.setState({
      gameActive: "standard",
      randomNumGenerated: ranNum,
      standardGamesPlayed: this.state.standardGamesPlayed + 1
    });
    console.log("STANDARD " + ranNum);
  };

  expertRandomNumGen = () => {
    this.resetDefaults();
    let ranNum = Math.floor(Math.random() * 100) + 1;
    this.setState({
      gameActive: "expert",
      randomNumGenerated: ranNum,
      expertGamesPlayed: this.state.expertGamesPlayed + 1
    });
    console.log("EXPERT " + ranNum);
  };

  highScoreHandler = () => {
    if (this.state.standardGamesPlayed === 1) {
      this.setState({ standardHighScore: this.state.userAttempts });
    } else if (this.state.expertGamesPlayed === 1) {
      this.setState({ expertHighScore: this.state.userAttempts });
    }
    if (
      this.state.standardGamesPlayed > 1 &&
      this.state.userAttempts <= this.state.standardHighScore &&
      this.state.gameActive === "standard"
    ) {
      this.setState({ standardHighScore: this.state.userAttempts });
    } else if (
      this.state.expertGamesPlayed > 1 &&
      this.state.userAttempts <= this.state.expertHighScore &&
      this.state.gameActive === "expert"
    ) {
      this.setState({ expertHighScore: this.state.userAttempts });
    }``
  };

  resetGame = () => {
    this.setState({
      gameActive: "",
      inputValue: null,
      lastGuess: null,
      randomNumGenerated: null,
      newValueEntry: " ",
      alert: "",

      userAttempts: 1,
      standardHighScore: 0,
      standardGamesPlayed: 0,
      expertHighScore: 0,
      expertGamesPlayed: 0
    });
  };

  resetDefaults = () => {
    this.setState({
      gameActive: "",
      inputValue: null,
      randomNumGenerated: null,
      alert: "",
      userAttempts: 1
    });
  };

  render() {
    return (
      <div className="App">
        <h1 className="App__header">Welcome to the Guessing Game!</h1>
        <header>
          <h2>Start Game!</h2>
          <h3>Instructions:</h3>
          <ol className="App__list__items">
            <li>
              Please press either <span className="App--bold">standard</span> or{" "}
              <span className="App--bold">expert</span> to get started!
            </li>
            <li>
              For <span className="App--bold">standard</span>, your objective is
              to guess a number between 1-10.{" "}
            </li>
            <li>
              For <span className="App--bold">expert</span>, your objective is
              to guess a number between 1-100.{" "}
            </li>
            <li>Try to beat your high score!</li>
          </ol>
        </header>
        <main>
          <Button gameFunc={this.standardRandomNumGen} gameLabel="standard" />
          <Button gameFunc={this.expertRandomNumGen} gameLabel="expert" />

           {/* <GameReset localState={this.state} /> */}

          <div>
            <Form stopFunc={this.handleInput} />
            <p className="attempts__counter">
              Attempts Counter: {this.state.userAttempts}
            </p>
            <p className="game__guess">{this.state.alert}</p>
            <div className="standard__high">
              Standard High Score: {this.state.standardHighScore}
            </div>
            <div className="expert__high">
              Expert High Score: {this.state.expertHighScore}
            </div>
            <Button gameFunc={this.resetGame} gameLabel="reset game " />
            <div className="rollingBottom" />
            <div className="rollingMiddle" />
          </div>
        </main>
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
