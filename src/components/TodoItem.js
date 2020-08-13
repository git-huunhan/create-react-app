import React, { Component } from 'react';
import className from 'classnames';
import './TodoItem.css';

class TodoItem extends Component {
  render(){
    const { item, onClick } = this.props;

    return(
      <div onClick={onClick} className={ className('TodoItem', {
        'TodoItem-complete': item.isComplete
      })}>
        <p>{this.props.item.title}</p>
      </div>
    );
  }
}

export default TodoItem;