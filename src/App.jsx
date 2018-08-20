import React, { Component } from "react";
import "./App.css";
import Form from "./Forms/Form";
import Boards from "./containers/Boards";
import BoardService from "./Services/BoardService";

class App extends Component {

  onAdd = name => {
    var newBoard = {
      name: name,
      id: Date.now()
    };
    BoardService.addBoard(newBoard);
    this.forceUpdate();
  };

  render() {
    return (
      <div className="App">
        <Form
          onAdd={this.onAdd}
        />
        <Boards boards={BoardService.getBoards()} />
      </div>
    );
  }
}

export default App;
