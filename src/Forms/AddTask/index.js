import React, { Component } from "react";

import "./style.css";

class AddTask extends Component {
  _input: ?HTMLInputElement;

  componentDidUpdate(prevProps, prevState) {
    this._input.focus();
  }

  render() {
    return (
      <div className="add-task">
        <form className="add-task__form" onSubmit={this.props.taskSubmit}>
          <div
            onClick={this.props.handleToggleMenu}
            className="add-task__open-new-list-form"
          >
            <span>&#43;</span> <div>Добавить задачу</div>
          </div>
          <div
            className={
              "add-task__input-container add-task__input-container_" +
              (this.props.isMenuOpen ? "hidden" : "show")
            }
          >
            <input
              onChange={this.props.taskChange}
              value={this.props.taskValue}
              placeholder="Новая задача"
              type="text"
              className="add-task__input"
              ref={c => (this._input = c)}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default AddTask;
