import React, { Component } from "react";

class Form extends Component {
  onSubmit = e => {
    e.preventDefault();
    this.props.onAdd(this.nameInput.value);
    this.nameInput.value = "";
  };

  render() {
    return (
      <div className="Form">
        <header>
          <h1> Board list </h1>
        </header>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Add onother list</label>
            <input
              ref={nameInput => (this.nameInput = nameInput)}
              placeholder="Enter list title"
              type="text"
            />
            <button type="submit">Add List</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
