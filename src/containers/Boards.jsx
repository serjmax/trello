import React, { Component } from "react";
import { Link } from "react-router-dom";

class Boards extends Component {
  render() {
    return (
      <div>
        <h1>Список досок</h1>
        <ul>
          {this.props.boards.map(board => (
            <li key={board.id}>
              <Link to={`/boards/${board.id}`}>{board.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Boards;
