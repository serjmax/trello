import React, { Component, Fragment } from "react";

import "./style.css";

import Lists from "../../containers/Lists";
import NavBar from "../../containers/NavBar";

import ListService from "../../Services/ListService";

class Board extends Component {
  // onAdd = name => {
  //   var newList = {
  //     name: name,
  //     id: Date.now()
  //   };
  //   ListService.addList(newList);
  //   this.forceUpdate();
  // };

  render() {
    // TODO: Опрокинуть название доски */
    // const { id } = this.props.match.params;

    return (
      <Fragment>
        <NavBar />
        <div className="board">
          <header>
            <h1>Доска № {} </h1>
          </header>
          {/* <Lists /> */}
          {/* <Form onAdd={this.onAdd} /> */}
          <Lists lists={ListService.getLists()} />
        </div>
      </Fragment>
    );
  }
}

export default Board;
