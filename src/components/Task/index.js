import React, { Component } from "react";

import "./style.css";

class Task extends Component {
  render() {
    const { taskValue } = this.props.task;

    return (
      <div className="task">
        <div className="task-value">{taskValue}</div>
      </div>
    );
  }
}

export default Task;
