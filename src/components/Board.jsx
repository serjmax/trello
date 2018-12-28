import React, { Component } from "react";

import Form from "../Forms/Form";

import Lists from "../containers/Lists";
import NavBar from "../containers/NavBar";

import ListService from "../Services/ListService";

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
      <div>
        <NavBar />
        <header>
          <h1>Доска № {} </h1>
        </header>
        {/* <Lists /> */}
        {/* <Form onAdd={this.onAdd} /> */}
        <Lists lists={ListService.getLists()} />
      </div>
    );
  }
}

export default Board;
