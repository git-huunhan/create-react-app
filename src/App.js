import React, { Component } from "react";
import "./App.css";
import TodoItem from "./components/TodoItem";
import checkImg from "./img/check.svg";
import checkCompleteImg from "./img/check-complete.svg";

class App extends Component {
  constructor() {
    super();
    this.state = {
      allChecked: false,
      newItem: "",
      todoItems: [],
    };

    this.onKeyUp = this.onKeyUp.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onItemClicked(item) {
    return (event) => {
      const isComplete = item.isComplete;
      const { todoItems } = this.state;
      const index = todoItems.indexOf(item);

      this.setState({
        todoItems: [
          ...todoItems.slice(0, index),
          {
            ...item,
            isComplete: !isComplete,
          },
          ...todoItems.slice(index + 1),
        ],
      });
    };
  }

  onKeyUp(event) {
    if (event.keyCode === 13) {
      let text = event.target.value;
      if (!text) {
        return;
      }
      text = text.trim();
      if (!text) {
        return;
      }

      this.setState({
        newItem: "",
        todoItems: [
          { title: text, isComplete: false },
          ...this.state.todoItems,
        ],
      });
    }
  }

  onChange(event) {
    this.setState({
      newItem: event.target.value,
    });
  }

  render() {
    const { todoItems, newItem } = this.state;
    if (todoItems.length) {
      let url = checkImg;
      if (todoItems.isComplete) {
        url = checkCompleteImg;
      }
      return (
        <div className="App">
          <p id="appname">Todo List</p>
          <div className="header">
            <img src={url} 
                 width={32}
                 alt="check">
            </img>
            <input
              type="text"
              placeholder="Add a new item"
              value={newItem}
              onChange={this.onChange}
              onKeyUp={this.onKeyUp}
            ></input>
          </div>
          {todoItems.length &&
            todoItems.map((item, index) => (
              <TodoItem
                key={index}
                item={item}
                onClick={this.onItemClicked(item)}
              />
            ))}
        </div>
      );
    } else {
      return (
        <div className="App">
          <p id="appname">Todo List</p>
          <div className="header">
            <img src={checkImg} width={32} alt="check"></img>
            <input
              type="text"
              placeholder="Add a new item"
              value={newItem}
              onChange={this.onChange}
              onKeyUp={this.onKeyUp}
            ></input>
          </div>
          <p id="nothing">Nothing here!</p>
        </div>
      );
    }
  }
}

export default App;
