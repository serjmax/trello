import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";

import Board from "./components/Board";
import Boards from "./containers/Boards";

import Form from "./Forms/Form";
import Lists from "./containers/Lists";
import ListService from "./Services/ListService";

class App extends Component {
  state = {
    inputValue: "",
    boards: [
      { id: 1, name: "Доска 1" },
      { id: 2, name: "Доска 2" },
      { id: 3, name: "Доска 3" }
    ]
  };

  onAdd = name => {
    var newList = {
      name: name,
      id: Date.now()
    };
    ListService.addList(newList);
    //TODO: Как работает строка ниже? Почему без неё не работает?
    this.forceUpdate();
  };

  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/:id" render={props => <Board />} />
          <Route
            exact
            path="/"
            render={props => <Boards boards={this.state.boards} />}
          />
        </Switch>
        <Form onAdd={this.onAdd} />
        <Lists lists={ListService.getLists()} />
      </div>
    );
  }
}

export default App;
