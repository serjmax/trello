import React, { Component } from "react";
import { Link } from "react-router-dom";

import BoardService from "../../Services/BoardService";

import "./style.css";

class NavBar extends Component {
  render() {
    return (
      <div className="nav-bar">
        <Link className="nav-bar__list-title" to="/">
          Мои доски
        </Link>
        <ul className="nav-bar__links-list">
          {BoardService.getBoards().map(board => (
            <li className="nav-bar__links-item" key={board.id}>
              <Link
                className="nav-bar__links-link"
                to={`/boards/${board.name}`}
                board={board}
              >
                {board.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default NavBar;
