import React, { Component } from "react";
import Task from "../components/Task";
import TaskForm from "../Forms/TaskForm";

class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskList: [],
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
      taskList: [...this.state.taskList, newTask],
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
          {this.state.taskList.map(task => {
            return <Task key={task.id} task={task} />;
          })}
        </div>
      </div>
    );
  }
}

export default TaskList;
