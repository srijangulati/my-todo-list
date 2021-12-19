import React from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import Todo from './components/Todo';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      todos: [],
    }
  }

  addTodo = (newTodo) => {
    this.setState({
      todos: [newTodo, ...this.state.todos]
    });
  }

  removeTodo = (todoId) => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== todoId)
    })
  }

  todoCompleted = (todoId) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === todoId) {
          todo.done = true;
        }
        return todo;
      })
    })
  }

  render() {
  return (
    <div className="App">
      <AddTodo addTodo={this.addTodo}></AddTodo>
      <div className="todo-list">
        {this.state.todos.map((todo) => (<Todo key={todo.id} {...todo} remove={this.removeTodo} complete={this.todoCompleted}></Todo>))}
      </div>
    </div>
  );
  }
}

export default App;