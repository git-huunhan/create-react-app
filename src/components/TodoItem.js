import React, { Component } from 'react';

class TodoItem extends Component {
  render(){
    return(
      <div className="TodoItem">
        <h2>List Item</h2>
        <p>Do something</p>
        <p>Do something</p>
        <p>Do something</p>
      </div>
    );
  }
}

export default TodoItem;