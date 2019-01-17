import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

import "./style.css";

import BoardService from "../../Services/BoardService";

import NavBar from "../NavBar";

class Boards extends Component {
  render() {
    return (
      <div className="boards">
        <ul>
          {BoardService.getBoards().map(board => (
            <li key={board.id}>
              <Link to={`/${board.name}`} board={board}>
                {board.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Boards;
