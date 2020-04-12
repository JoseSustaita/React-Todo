import React from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import "./components/Todo.css";

const todos = [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false,
  },
  {
    task: "Bake Cookies",
    id: 1528817084358,
    completed: false,
  },
];
class App extends React.Component {
  constructor() {
    super();
    //initialize the state object
    this.state = {
      todosList: todos,
    };
  }
  //Toggling the todos
  toggleTodo = (id) => {
    const moreThingsToDo = this.state.todosList.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      } else {
        return todo;
      }
    });

    this.setState({
      todosList: moreThingsToDo,
    });
  };

  //Add Todo
  addTodo = (todoName) => {
    const newTodo = {
      task: todoName,
      id: Date.now(),
      completed: false,
    };
    this.setState({
      todosList: [...this.state.todosList, newTodo],
    });
  };

  //Clear Todo
  clearTodo = (e) => {
    e.preventDefault();
    let todosList = this.state.todosList.filter((todo) => !todo.completed);
    this.setState({ todosList });
  };

  render() {
    return (
      <div>
        <div>
          <h1>Todo List!</h1>
        </div>
        <TodoForm addTodo={this.addTodo} />
        <TodoList
          todos={this.state.todosList}
          toggleTodo={this.toggleTodo}
          clearTodo={this.clearTodo}
        />
      </div>
    );
  }
}

export default App;
