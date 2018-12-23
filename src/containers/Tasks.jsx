import React, { Component } from "react";
import Task from "../components/Task";
import TaskForm from "../Forms/TaskForm";

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
      <div>
        <TaskForm
          taskValue={this.state.taskValue}
          taskChange={this.taskChange}
          taskSubmit={this.taskSubmit}
        />
        <div className="TaskList">
          {this.state.tasks.map(task => {
            return <Task key={task.id} task={task} />;
          })}
        </div>
      </div>
    );
  }
}

export default Tasks;
