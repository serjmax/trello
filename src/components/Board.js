import React, { PureComponent } from "react";

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

        <form onSubmit={e => this.taskSubmit(e)}>
          <div>
            <input
              onChange={e => this.taskChange(e)}
              value={this.state.taskValue}
              placeholder="New task"
              type="text"
            />
            <button type="submit">Add</button>
          </div>
        </form>
        <div className="taskList">
          {this.state.taskList.map(task => {
            return (
              <div key={task.id}>{task.taskValue}</div>
            )
          })}
        </div>
      </div>
    );
  }
}

export default Board;
