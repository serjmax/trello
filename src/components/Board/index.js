import React, { Component } from "react";

import "./style.css";

import Lists from "../../containers/Lists";

import BoardService from "../../Services/BoardService";

class Board extends Component {
  render() {
    console.log(BoardService);
    return (
      <div className="board">
        <header>
          <h1>{this.props.match.params.id}</h1>
        </header>
        <Lists
          lists={BoardService.getBoardByName(this.props.match.params.id).lists}
        />
      </div>
    );
  }
}

export default Board;
