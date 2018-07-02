import React, { Component } from 'react';
import mapValues from 'lodash/mapValues'

import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    checkedList: {
      a: false,
      b: false,
      c: false,
      d: false,
      e: false
    }
  }

  handleClick = (event) => {
    const { value } = event.currentTarget
    const isChecked = this.state.checkedList[value]
    if (value === "a") {
      this.setState((previousState) => {
        return {
          checkedList: mapValues(previousState.checkedList, () => !isChecked)
        }
      })
    } else {
      this.setState((previousState) => ({
          checkedList: {
            ...previousState.checkedList,
            [value]: !isChecked
          }
        })
      )
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <br/>
        <div>
          {
            ["a", "b", "c", "d", "e"].map(i =>
              <p key={i}>
                <label> Checkbox N. {i}: </label>
                <input value={i} type="checkbox" checked={this.state.checkedList[i]} onClick={this.handleClick}/>
              </p>
            )
          }
        </div>
      </div>
    );
  }
}

export default App;
