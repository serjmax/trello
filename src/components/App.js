import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [], 
      text: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({text: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    var newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState((prevState) => ({
      items: prevState.items.concat(newItem),
      text: ''
    }));
  }

  render() {
    const { items } = this.state;
    return (
      <div>
        <header>
          <h1>Board list</h1>
        </header>
        <form
          className="form-inline"
          onSubmit={this.handleSubmit} value={this.state.text}>
          <div className="form-group">
            <label className="sr-only" htmlFor="newBoardInput">
              Add New Board
            </label>
            <input
              onChange={this.handleChange} value={this.state.text}
              ref={input => (this.newBoard = input)}
              className="form-control"
              id="newBoardInput"
              placeholder="My favorite staff"
              type="text"
            />
            <button type="submit" className="btn btn-primary">
              Add
            </button>
          </div>
        </form>
        {/* {this.props.items.map(item => (
          <li key={item.id}>{item.text}</li>
        ))} */}
        {items.map(item => {
          return (
            <div className="Board" key={item.id}>
              {item.text}
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
