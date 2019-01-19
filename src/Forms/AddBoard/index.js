import React, { Component } from "react";

import "./style.css";

class AddBoard extends Component {
  nameInput: ?HTMLInputElement;

  componentDidUpdate(prevProps, prevState) {
    this.nameInput.focus();
  }

  render() {
    return (
      <div className="add-board">
        <form onSubmit={this.props.boardSubmit}>
          <div
            className={
              "add-board__input-container add-board__input-container_" +
              (this.props.isMenuOpen ? "show" : "hidden")
            }
          >
            <input
              placeholder="Название доски"
              className="add-board__input"
              type="text"
              onChange={this.props.boardChange}
              value={this.props.boardValue}
              ref={nameInput => (this.nameInput = nameInput)}
            />
          </div>
          <button
            className={
              "add-board__add-button add-board__add-button_" +
              (this.props.isMenuOpen ? "show" : "hidden")
            }
            type="submit"
          />
        </form>
      </div>
    );
  }
}

export default AddBoard;
