import React from "react";

export default class AddTodo extends React.Component {
  constructor() {
    super();
    this.state = {
      currentTodo: ''
    }
  }

  updateCurrentTodo = (event) => {
    this.setState({
      currentTodo: event.target.value
    })
  }

  processTodo = () => {
    this.props.addTodo({
      name: this.state.currentTodo,
      id: Date.now(),
      done: false,
    })
    this.setState({
      currentTodo: ''
    })
  }

  render() {
    return (
      <>
        <div className="add-todo">
          <input placeholder="Add Todo here" value={this.state.currentTodo} onChange={this.updateCurrentTodo}></input>
          <button onClick={this.processTodo}> Add Todo</button>
        </div>
      </>
    )
  }
}