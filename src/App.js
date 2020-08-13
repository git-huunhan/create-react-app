import React, { Component } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';

class App extends Component {
  constructor(){
    super();
    this.state = {
        todoItems: [
        { title: 'Mua bánh', isComplete: true },
        { title: 'Mua kẹo', isComplete: true  },
        { title: 'Mua nước ngọt' }
      ]
    };
  }

  onItemClicked(item){
    return (event) => {
      console.log(item);
      const isComplete = item.isComplete;
      const { todoItems } = this.state;
      const index = todoItems.indexOf(item);

      this.setState({
        todoItems: [
          ...todoItems.slice(0, index),
          {
            ...item,
            isComplete: !isComplete
          },
          ...todoItems.slice(index + 1)
        ]
      });
    };
  }

  render(){
    const { todoItems } = this.state;
    if (todoItems.length){
      return (
        <div className="App">
          <p id="header">Todo List</p>
          {
            todoItems.length && todoItems.map((item, index) =>
            <TodoItem key={index} 
                      item={item} 
                      onClick={this.onItemClicked(item)}/>
            )
          } 
        </div>
      );
    } else {
      return(
        <div className="App">
          <p id="header">Todo List</p>
          <p id="nothing">Nothing here!</p>
        </div> 
      );
    }
  }
}

export default App;
