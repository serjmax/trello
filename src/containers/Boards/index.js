import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

import "./style.css";

import AddBoard from "../../Forms/AddBoard";

import BoardService from "../../Services/BoardService";

import Board from "../../components/Board";
import NavBar from "../NavBar";

class Boards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false,
      boardValue: ""
    };
  }

  boardChange = e => {
    this.setState({ boardValue: e.target.value });
  };

  boardSubmit = e => {
    e.preventDefault();
    var newBoard = {
      name: this.state.boardValue,
      id: Date.now()
    };
    BoardService.addBoard(newBoard);
    this.setState({
      boardValue: "",
      isMenuOpen: false
    });
  };

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

  handleToggleMenu = () => {
    this.setState({ isMenuOpen: !this.state.isMenuOpen });
  };

  render() {
    return (
      <Fragment>
        <NavBar
          // onAdd={this.onAdd}
          boardValue={this.state.boardValue}
          boardChange={this.boardChange}
          boardSubmit={this.boardSubmit}
          handleToggleMenu={this.handleToggleMenu}
          isMenuOpen={this.state.isMenuOpen}
        />

        <div className="boards">
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
