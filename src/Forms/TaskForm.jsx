import React, { Component } from "react";

class TaskForm extends Component {
  render() {
    return (
      <div className="TaskForm">
        <form onSubmit={this.props.taskSubmit}>
          <div>
            <input
              onChange={this.props.taskChange}
              value={this.props.taskValue}
              placeholder="New task"
              type="text"
            />
            <button type="submit">Add</button>
          </div>
        </form>
      </div>
    );
  }
}

export default TaskForm;
