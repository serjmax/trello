import React, { Component } from "react";
import Task from "../components/Task";

class TaskList extends Component {
  render() {
    return (
      <div className="TaskList">
        {this.props.taskList.map(task => {
          return <Task key={task.id} task={task}/>
        })}
      </div>
    );
  }
}

export default TaskList;
