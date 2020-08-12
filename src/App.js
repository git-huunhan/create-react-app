import React, { Component } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';

class App extends Component {
  constructor(){
    super();

    this.todoItems = [
      // { title: 'Mua bánh', isComplete: true },
      // { title: 'Mua kẹo', isComplete: true  },
      // { title: 'Mua nước ngọt' }
    ];
  }

  render(){
    return (
      <div className="App">
        <h2>List Item</h2>
        {
          this.todoItems.length > 0 && this.todoItems.map((item, index) =>
          <TodoItem key={index} item={item}/>
          )
        }
        {
          this.todoItems.length === 0 && 'Nothing here'
        }
      </div>
    );
  }
}

export default App;
