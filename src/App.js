import React, { Component } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';

class App extends Component {
  render(){
    return (
      <div className="App">
        <TodoItem/>
      </div>
    );
  }
}

export default App;
