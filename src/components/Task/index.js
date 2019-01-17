import React, { Component } from "react";

import "./style.css";

class Task extends Component {
  render() {
    const { name } = this.props.task;

    return (
      <div className="task">
        <div className="task-value">{name}</div>
      </div>
    );
  }
}

export default Task;
