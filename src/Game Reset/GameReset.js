import React, { Component} from "react";

class GameReset extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

   globalState =() =>{

  }

  resetGame = (props) => {
    props.localState.setState({
      gameActive: "",
      inputValue: " ",
      randomNumGenerated: null,
      alert: "",
      userAttempts: 1,
      standardHighScore: 0,
      expertHighScore: 0
    });
  };

  resetDefaults = (props) => {
    props.localState.setState({
      gameActive: "",
      inputValue: null,
      randomNumGenerated: null,
      alert: "",
      userAttempts: 1
    });
  };
};

export default GameReset;
