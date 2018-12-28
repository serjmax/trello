import React, { Component } from "react";

import "./style.css";

class AddTask extends Component {
  render() {
    return (
      <div className="add-task">
        <form onSubmit={this.props.taskSubmit}>
          <div>
            <input
              onChange={this.props.taskChange}
              value={this.props.taskValue}
              placeholder="Новая задача"
              type="text"
            />
            <button type="submit">Добавить</button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddTask;
