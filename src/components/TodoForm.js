import React from "react";
import "./Todo.css";

class TodoForm extends React.Component {
  //constructor with state
  constructor() {
    super();
    this.state = {
      TodoItem: "",
    };
  }

  handleChanges = (event) => {
    //update state with each keystroke
    this.setState({
      TodoItem: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addTodo(this.state.TodoItem);
    this.setState({ TodoItem: [""] });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="item"
          value={this.state.TodoItem}
          onChange={this.handleChanges}
        />
        <button className="addbutton">Add Todo</button>
      </form>
    );
  }
}

export default TodoForm;
