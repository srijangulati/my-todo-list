import React from "react";

import '../App.css';

export default class Todo extends React.Component {
  removeTodo = () => {
    this.props.remove(this.props.id);
  }

  completeTodo = () => {
    this.props.complete(this.props.id);
  }

  renderCompleteTodo() {
    return (
      <>
        <div className="completed"> {this.props.name} </div>
      </>
    )
  }

  renderIncompleteTodo() {
    return (
      <div className="todo">
          <div> {this.props.name}</div>
          <button onClick={this.completeTodo}> Done </button>
          <button onClick={this.removeTodo}> Remove </button>
        </div>
    );
  }

  render() {
    return (
      <>
      {this.props.done ? this.renderCompleteTodo() : this.renderIncompleteTodo()}
      </>
    )
  }

}

Todo.defaultProps = {
  name: 'Name was not defined'
};