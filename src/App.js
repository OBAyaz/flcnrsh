import React, { Component } from 'react';
import './App.css';
import Result from'./Result.js';
import Radar from'./Radar.js';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      summary: ["The opponent team won the game in a dominant fashion.", "You displayed a subpar performance.", "Maybe you should improve your fundamental skills.", "Here are some advices that would increase your chance to win.", "Your lane farm was high but jungle farm was low.", "Use a better jungle rotation.", "You made them stuck in their base actually, you were better than we expected.", "Follow your role responsibility, participate more in team fights.", "The skills that you used in team fight just came to our office."],
      gameStatData: { 
        YourStatData: [[10, 12, 18, 20, 15], [14, 10, 9, 15, 18], [17, 19, 8, 7, 13], [7, 12, 14, 13, 17], [16, 12, 18, 20, 15]],
        AdvicedStatData: [[6, 15, 13, 18, 15], [17, 19, 8, 7, 13], [14, 10, 9, 15, 18], [16, 12, 18, 20, 15], [7, 12, 14, 13, 17]]
      },
      game: 0
    };
  }

  handleClick(e) {
    console.log(e.target.dataset.action);
    if (e.target.dataset.action === "next" && e.target.dataset.game < 4) { 
        this.setState((state, props) => ({
            game: state.game + 1
        })); 
    }
    else if (e.target.dataset.action === "back" && e.target.dataset.game > 0) {  
        this.setState((state, props) => ({      
            game: state.game - 1
        }));
    }
  }

  render() {

    const statData = {
      YourStatData: this.state.gameStatData.YourStatData[this.state.game],
      AdvicedStatData: this.state.gameStatData.AdvicedStatData[this.state.game]
    }

    return (
      <div>
        <Result />
        <Radar 
          summary={this.state.summary} 
          gameStatData={statData}
          onClick={(e) => this.handleClick(e)}
          game={this.state.game}
        />
      </div>
    );
  }
}

export default App;
