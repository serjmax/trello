import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boardList: []
    };
  }

  addBoard(e) {
    e.preventDefault();
    const { boardList } = this.state;
    const newBoard = this.newBoard.value;

    this.setState({
      boardList: [...boardList, newBoard]
    });

    this.addForm.reset();
  }

  render() {
    const { boardList } = this.state;
    return (
      <div>
        <header>
          <h1>Board list</h1>
        </header>
        <form
          ref={form => (this.addForm = form)}
          className="form-inline"
          onSubmit={e => {
            this.addBoard(e);
          }}
        >
          <div className="form-group">
            <label className="sr-only" htmlFor="newBoardInput">
              Add New Board
            </label>
            <input
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
        {boardList.map(board => {
          return (
            <div className="Board" key={board}>
              {board}
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
