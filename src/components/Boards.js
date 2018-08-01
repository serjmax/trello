import React, { Component } from "react";
import Board from "./Board";

class Boards extends Component {
  render() {
    return (
      <div className="Boards">
        {this.props.boards.map(board => {
          return <Board board={board} key={board.id} />;
        })}
      </div>
    );
  }
}

export default Boards;
