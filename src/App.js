import React, { Component } from 'react';
import Snake from './Snake';
import Food from './Food';

const getRandomCoordinates = () => {
  let min = 1;
  let max = 98;
  let x = Math.floor((Math.random()*(max-min+1)+min)/2)*2;
  let y = Math.floor((Math.random()*(max-min+1)+min)/2)*2;
  return [x,y]
}

class App extends Component {
  state = {
    Food: getRandomCoordinates (),
    
    snakeDots: [
      [2,0]
      [0,0],
    ]
  }

  render() {
    return (
    <div className="game-area">
      <Snake snakeDots={this.state.snakeDots}></Snake>
      <Food dot={this.state.Food}></Food>
    </div>
    );
  }
}

export default App;
