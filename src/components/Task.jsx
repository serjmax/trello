import React, { Component } from "react";

class Task extends Component {
  render() {
    const { taskValue } = this.props.task;

    return (
      <div className="Task">
        <div className="taskValue">{taskValue}</div>
      </div>
    );
  }
}

export default Task;
