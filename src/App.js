import React, { Component } from 'react';
import './App.css';
import CommandLine from './CommandLine';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CommandLine defaultValue={''}/>
      </div>
    );
  }
}

export default App;
