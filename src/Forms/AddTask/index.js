import React, { Component } from "react";

import "./style.css";

class AddTask extends Component {
  render() {
    return (
      <div className="add-task">
        <form className="add-task__form" onSubmit={this.props.taskSubmit}>
          <div>
            <input
              onChange={this.props.taskChange}
              value={this.props.taskValue}
              placeholder="Новая задача"
              type="text"
              className="add-task__input"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default AddTask;
