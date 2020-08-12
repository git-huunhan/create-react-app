import React, { Component } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';

class App extends Component {
  constructor(){
    super();

    this.todoItems = [
      'Mua bánh',
      'Mua kẹo',
      'Mua nước ngọt'
    ];
  }

  render(){
    return (
      <div className="App">
        <h2>List Item</h2>
        {
          this.todoItems.map((item, index) =>
          <TodoItem key={index} title={item}/>
          )
        }
      </div>
    );
  }
}

export default App;
