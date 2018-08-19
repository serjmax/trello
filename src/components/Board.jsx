import React, { PureComponent } from "react";
import TaskList from "../containers/TaskList";

class Board extends PureComponent {
  render() {
    return (
      <div className="Board">
        <div className="title">{this.props.board.title}</div>
        <TaskList />
      </div>
    );
  }
}

export default Board;
