import React, { Component } from "react";

class Form extends Component {

  render() {
    return (
      <div className="Form">
        <header>
          <h1> Board list </h1>
        </header>
        <form
          className="form-inline"
          onSubmit={e => this.props.handleSubmit(e)}
        >
          <div className="form-group">
            <label className="sr-only" htmlFor="newBoardInput">
              Add New Board
            </label>
            <input
              onChange={this.props.handleChange}
              value={this.props.inputValue}
              ref={input => (this.newBoard = input)}
              className="form-control"
              id="newBoardInput"
              // placeholder="My favorite staff"
              type="text"
            />
            <button type="submit" className="btn btn-primary">
              Add
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
