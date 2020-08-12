import React, { Component } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';

class App extends Component {
  render(){
    return (
      <div className="App">
        <h2>List Item</h2>
        <TodoItem title="Mua bánh"/>
        <TodoItem title="Mua kẹo"/>
        <TodoItem title="Mua nước ngọt"/>
      </div>
    );
  }
}

export default App;
