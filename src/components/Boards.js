import React, { Component } from "react";
import Board from "./Board";

class Boards extends Component {
  render() {
    return (
      <div>
        {this.props.boards.map(board => {
          return (
            <Board 
              board={board}
            />);
        })}
        {/* {items.map(item => {
          return (
            <div className="Board" key={item.id}>
              {item.text}
            </div>
          );
        })} */}
      </div>
    );
  }
}

export default Boards;
