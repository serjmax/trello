import React, { Component } from "react";

import "./style.css";

import Lists from "../../containers/Lists";

import ListService from "../../Services/ListService";

class Board extends Component {
  render() {
    return (
      <div className="board">
        <header>
          <h1>{this.props.match.params.id}</h1>
        </header>
        <Lists lists={ListService.getLists()} />
      </div>
    );
  }
}

export default Board;
