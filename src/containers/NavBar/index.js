import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

import BoardService from "../../Services/BoardService";

import "./style.css";
import AddBoard from "../../Forms/AddBoard";

class NavBar extends Component {
  render() {
    return (
      <div className="nav-bar">
        <div className="nav-bar__list-head">
          <Link className="nav-bar__list-title" to="/">
            Мои доски
          </Link>
          <div
            onClick={this.props.handleToggleMenu}
            className="nav-bar__open-new-board-form"
          >
            &#43;
          </div>
        </div>

        <AddBoard
          boardValue={this.props.boardValue}
          boardChange={this.props.boardChange}
          boardSubmit={this.props.boardSubmit}
          handleToggleMenu={this.props.handleToggleMenu}
          isMenuOpen={this.props.isMenuOpen}
        />

        <div className="nav-bar__links-list">
          {BoardService.getBoards().map(board => (
            <div className="nav-bar__links-item" key={board.id}>
              <NavLink
                className="nav-bar__links-link"
                to={`/${board.name}`}
                board={board}
              >
                {board.name}
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default NavBar;
