import React, { Component } from "react";
import "./App.css";
import Form from "./Forms/Form";
import Boards from "./containers/Boards";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boards: [],
      inputValue: ""
    };
  }

  handleChange = e => {
    this.setState({
      inputValue: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.inputValue !== "") {
      var newBoard = {
        title: this.state.inputValue,
        id: Date.now()
      };
      this.setState({
        boards: [...this.state.boards, newBoard],
        inputValue: ""
      });
    }
  };

  

  render() {
    return (
      <div className="App">
        <Form
          inputValue={this.state.inputValue}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <Boards boards={this.state.boards}/>
      </div>
    );
  }
}

export default App;
