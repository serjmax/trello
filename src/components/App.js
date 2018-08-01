import React, { Component } from "react";
import "./App.css";
import Form from "./Form";
import Boards from "./Boards";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
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
    if (this.state.text !== "") {
      var newItem = {
        text: this.state.text,
        id: Date.now()
      };
      this.setState({
        items: [...this.state.items, newItem],
        inputValue: ""
      });
    }
  }

  render() {
    const { items } = this.state;
    return (
      <div className="App">
        <Form 
          inputValue={this.state.inputValue}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <Boards />
      </div>
    );
  }
}

export default App;
