import React, { Component } from "react";
import "./App.css";
import Form from "./Form";
import Boards from "./Boards";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boards: [{ title: "My first board", id: Date.now() }],
      inputValue: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      inputValue: e.target.value
    });
  }

  handleSubmit(e) {
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
  }

  render() {
    // const { items } = this.state;
    return (
      <div className="App">
        <Form
          inputValue={this.state.inputValue}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <Boards boards={this.state.boards} />
      </div>
    );
  }
}

export default App;
