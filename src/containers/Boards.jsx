import React, { Component } from "react";

import Board from "../components/Board";

class Boards extends Component {
  render() {
    return (
      <div className="boards">
        {this.props.boards.map(board => {
          return <Board board={board} key={board.id} />;
        })}
      </div>
    );
  }
}

export default Boards;
