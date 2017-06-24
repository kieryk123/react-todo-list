import React from 'react';

// create TodoItem component
class TodoItem extends React.Component {
  render() {
    return (
      <li>
        <div className="todo-item">
          <input type="checkbox" className="item-check" onChange={this.handleCheck.bind(this)} />
          <span className="item-name" ref="text">{this.props.item}</span>
          <span className="item-remove" onClick={this.handleDelete.bind(this)}> X </span>
        </div>
      </li>
    )
  }

  handleDelete() {
    this.props.onDelete(this.props.item);
  }

  handleCheck(e) {
    let item = e.target;
    this.props.onCheck(item);
  }
}

export default TodoItem;
