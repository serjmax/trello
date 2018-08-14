import React, { PureComponent } from "react";
import TaskList from '../containers/TaskList';
import TaskForm from '../components/Forms/TaskForm'

class Board extends PureComponent {
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
      <div className="Board">
        <div className="title">{this.props.board.title}</div>
        <TaskForm 
          taskValue={this.state.taskValue}
          taskChange={this.taskChange}
          taskSubmit={this.taskSubmit}
        />
        <TaskList taskList={this.state.taskList}/>
      </div>
    );
  }
}

export default Board;
