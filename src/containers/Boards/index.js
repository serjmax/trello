import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

import "./style.css";

import BoardService from "../../Services/BoardService";

import NavBar from "../NavBar";

class Boards extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     isMenuOpen: false,
  //     boardValue: ""
  //   };
  // }

  // onSubmit = e => {
  //   e.preventDefault();
  //   this.props.onAdd(this.nameInput.value);
  //   this.nameInput.value = "";
  // };

  // onAdd = name => {
  //   var newBoard = {
  //     name: name,
  //     id: Date.now()
  //   };
  //   BoardService.addBoard(newBoard);
  //   this.setState({ isMenuOpen: true });
  //   //TODO: Как работает строка ниже? Почему без неё не работает?
  //   this.forceUpdate();
  // };

  render() {
    return (
      <Fragment>
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
      </Fragment>
    );
  }
}

export default Boards;
