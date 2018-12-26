import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";

import "./App.css";

import Board from "./components/Board";

import Boards from "./containers/Boards";

class App extends Component {
  state = {
    inputValue: "",
    boards: [
      { id: 1, name: "Доска 1" },
      { id: 2, name: "Доска 2" },
      { id: 3, name: "Доска 3" }
    ]
  };

  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/:id" render={props => <Board {...props} />} />
          <Route
            exact
            path="/"
            render={props => <Boards boards={this.state.boards} />}
          />
        </Switch>
        <div>
          {/* <ul>
            {this.props.boards.map(board => (
              <li key={board.id}>
                <Link to={`/${board.id}`}>{board.name}</Link>
              </li>
            ))}
          </ul> */}
        </div>
      </div>
    );
  }
}

export default App;
