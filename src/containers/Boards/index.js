import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

import "./style.css";

import AddBoard from "../../Forms/AddBoard";

import BoardService from "../../Services/BoardService";

import Board from "../../components/Board";
import NavBar from "../NavBar";

class Boards extends Component {
  onAdd = name => {
    var newBoard = {
      name: name,
      id: Date.now()
    };
    BoardService.addBoard(newBoard);
    //TODO: Как работает строка ниже? Почему без неё не работает?
    this.forceUpdate();
  };

  render() {
    return (
      <Fragment>
        <NavBar />

        <div className="boards">
          <AddBoard onAdd={this.onAdd} />
          <ul>
            {BoardService.getBoards().map(board => (
              <li key={board.id}>
                <Link to={`/boards/${board.name}`} board={board}>
                  {board.name}
                </Link>
              </li>
            ))}
          </ul>
          {/* {BoardService.getBoards().map(board => {
            return <Board board={board} key={board.id} />;
          })} */}
        </div>
      </Fragment>
    );
  }
}

export default Boards;
