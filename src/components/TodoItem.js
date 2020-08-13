import React, { Component } from 'react';
import className from 'classnames';
import './TodoItem.css';
import checkImg from '../img/check.svg';
import checkCompleteImg from '../img/check-complete.svg';

class TodoItem extends Component {
  render(){
    const { item, onClick } = this.props;
    let url = checkImg;
    if (item.isComplete){
      url = checkCompleteImg;
    }

    return(
      <div className={ className('TodoItem', {
        'TodoItem-complete': item.isComplete
      })}>
        <img onClick={onClick} src={url} width={32} alt="check"></img>
        <p>{this.props.item.title}</p>
      </div>
    );
  }
}

export default TodoItem;