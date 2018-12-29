import React, { Component, Fragment } from "react";

import "./style.css";

import Task from "../../components/Task";
import AddTask from "../../Forms/AddTask";

class Tasks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      taskValue: ""
    };
  }
  taskChange = e => {
    this.setState({
      taskValue: e.target.value
    });
  };

  taskSubmit = e => {
    e.preventDefault();

    if (this.state.taskValue == "") {
      return null;
    }
    var newTask = {
      taskValue: this.state.taskValue,
      id: Date.now()
    };

    this.setState({
      tasks: [...this.state.tasks, newTask],
      taskValue: ""
    });
  };

  render() {
    return (
      <div className="tasks">
        <AddTask
          taskValue={this.state.taskValue}
          taskChange={this.taskChange}
          taskSubmit={this.taskSubmit}
        />
        <div className="tasks__list">
          {this.state.tasks.map(task => {
            return <Task key={task.id} task={task} />;
          })}
        </div>
      </div>
    );
  }
}

export default Tasks;
