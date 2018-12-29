import React, { Component } from "react";

import "./style.css";

class AddList extends Component {
  _input: ?HTMLInputElement;

  componentDidUpdate(prevProps, prevState) {
    this._input.focus();
  }

  // onSubmit = e => {
  //   e.preventDefault();
  //   this.props.onAdd(this.nameInput.value);
  //   this.nameInput.value = "";
  // };

  render() {
    return (
      <div className="add-list">
        <form onSubmit={this.props.listSubmit}>
          <div
            onClick={this.props.handleToggleMenu}
            className="add-list__open-new-list-form"
          >
            <span>&#43;</span> <div>Добавить колонку</div>
          </div>
          <div
            className={
              "add-list__input-container add-list__input-container_" +
              (this.props.isMenuOpen ? "hidden" : "show")
            }
          >
            <input
              onChange={this.props.listChange}
              value={this.props.listValue}
              placeholder="Название колонки"
              type="text"
              className="add-list__input"
              autofocus="true"
              ref={c => (this._input = c)}
            />
          </div>
          <button
            className={
              "add-list__add-button add-list__add-button_" +
              (this.props.isMenuOpen ? "hidden" : "show")
            }
            type="submit"
          />
        </form>
      </div>
      // <div className="add-list">
      //   <form onSubmit={this.onSubmit}>
      //     <div>
      //       <input
      //         ref={nameInput => (this.nameInput = nameInput)}
      //         placeholder="Название колонки"
      //         type="text"
      //       />
      //       <button type="submit">Добавить колонку</button>
      //     </div>
      //   </form>
      // </div>
    );
  }
}

export default AddList;
