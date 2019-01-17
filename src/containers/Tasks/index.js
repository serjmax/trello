import React, { Component, Fragment } from "react";

import "./style.css";

import Task from "../../components/Task";
import AddTask from "../../Forms/AddTask";

import TaskService from "../../Services/TaskService";

class Tasks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskValue: "",
      isMenuOpen: true
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
      name: this.state.taskValue,
      id: Date.now()
    };

    TaskService.addTask(newTask);

    this.setState({
      taskValue: "",
      isMenuOpen: true
    });
  };

  handleToggleMenu = () => {
    this.setState({ isMenuOpen: !this.state.isMenuOpen });
  };

  render() {
    return (
      <div className="tasks">
        <AddTask
          taskValue={this.state.taskValue}
          taskChange={this.taskChange}
          taskSubmit={this.taskSubmit}
          handleToggleMenu={this.handleToggleMenu}
          isMenuOpen={this.state.isMenuOpen}
        />
        <div className="tasks__list">
          {TaskService.getTasks().map(task => {
            return <Task key={task.id} task={task} />;
          })}
        </div>
      </div>
    );
  }
}

export default Tasks;
