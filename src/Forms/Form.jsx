import React, { Component } from "react";

class Form extends Component {
  render() {
    return (
      <div className="Form">
        <header>
          <h1> Board list </h1>
        </header>
        <form
          onSubmit={e => this.props.handleSubmit(e)}
        >
          <div>
            <label>Add New Board</label>
            <input
              onChange={this.props.handleChange}
              value={this.props.inputValue}
              placeholder="My favorite staff"
              type="text"
            />
            <button type="submit">
              Add
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
