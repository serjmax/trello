import React, { Component } from "react";
import { Link } from "react-router-dom";

import AddBoard from "../Forms/AddBoard";

import BoardService from "../Services/BoardService";

import Board from "../components/Board";

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
      <div>
        <h1>Список досок</h1>
        <AddBoard onAdd={this.onAdd} />

        <div className="boards">
          <ul>
            {BoardService.getBoards().map(board => (
              <li key={board.id}>
                <Link to={`/boards/${board.id}`}>{board.name}</Link>
              </li>
            ))}
          </ul>
          {/* {BoardService.getBoards().map(board => {
            return <Board board={board} key={board.id} />;
          })} */}
        </div>
      </div>
    );
  }
}

export default Boards;
