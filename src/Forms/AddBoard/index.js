import React, { Component } from "react";

import "./style.css";

class AddBoard extends Component {
  nameInput: ?HTMLInputElement;

  componentDidUpdate(prevProps, prevState) {
    this.nameInput.focus();
  }

  // onSubmit = e => {
  //   e.preventDefault();
  //   this.props.onAdd(this.nameInput.value);
  //   this.nameInput.value = "";
  // };

  render() {
    return (
      <div className="add-board">
        <form onSubmit={this.props.boardSubmit}>
          {/* <div
            onClick={this.handleToggleMenu}
            className="add-board__open-new-board-form"
          >
            <span>&#43;</span> <div>Новая доска</div>
          </div> */}
          <div
            className={
              "add-board__input-container add-board__input-container_" +
              (this.props.isMenuOpen ? "show" : "hidden")
            }
          >
            {/* //TODO: Почему здесь инпут так сделан? Почему не более классический вид с функцией onChange? */}
            <input
              //TODO: Не понимаю что означает строка ниже:
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
