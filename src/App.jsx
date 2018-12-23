import React, { Component } from "react";
import "./App.css";
import Form from "./Forms/Form";
import Lists from "./containers/Lists";
import ListService from "./Services/ListService";

class App extends Component {
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
        <Form onAdd={this.onAdd} />
        <Lists lists={ListService.getLists()} />
      </div>
    );
  }
}

export default App;
