import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
  constructor(props) {
    super(props);

    const numberList = this.generateNumberList();
    this.state = {
      numberList : numberList,
    };
    this.manipulationMethods = {
    };
  }

  generateNumberList = () => {
    let numberList = []
    for (let i = 0; i < 5; i++) {
      numberList.push(Math.floor(Math.random()*10));
    }
    return numberList;
  }

  manipulateList = (numberOfMethods) => {
    let newNumberList = [...this.state.numberList];

  }

  chooseManipulationMethod = () => {
    //reverse, slice, increment/decrement all, multiply all, square all
    //sort low to high, sort high to low

  }

  render() {
    return (
      <div className="App">
        {this.state.numberList}
      </div>
    );
  }
}

export default App;
