import React, { Component } from "react";

import "./style.css";

class AddList extends Component {
  _input: ?HTMLInputElement;

  componentDidUpdate(prevProps, prevState) {
    this._input.focus();
  }

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
    );
  }
}

export default AddList;
