import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";

import Board from "./components/Board";
import Boards from "./containers/Boards";
import NavBar from "./containers/NavBar";

import BoardService from "./Services/BoardService";

class App extends Component {
  state = {
    isMenuOpen: false,
    boardValue: ""
  };

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

  handleToggleMenu = () => {
    this.setState({ isMenuOpen: !this.state.isMenuOpen });
  };

  render() {
    return (
      <div className="App">
        <NavBar
          boardValue={this.state.boardValue}
          boardChange={this.boardChange}
          boardSubmit={this.boardSubmit}
          handleToggleMenu={this.handleToggleMenu}
          isMenuOpen={this.state.isMenuOpen}
        />
        <Switch>
          <Route path="/:id" component={Board} />
          <Route exact path="/" component={Boards} />
        </Switch>
      </div>
    );
  }
}

export default App;
