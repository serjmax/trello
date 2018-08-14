import React, { Component } from "react";

class Task extends Component {
  render() {
    return (
      <div className="Task">
        <div className="taskValue">{this.props.task.taskValue}</div>
      </div>
    );
  }
}

export default Task;
