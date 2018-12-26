import React, { PureComponent } from "react";

import "./style.css";

import Tasks from "../../containers/Tasks";

class List extends PureComponent {
  render() {
    return (
      <div className="list">
        <div className="list__title">{this.props.list.name}</div>
        <Tasks />
      </div>
    );
  }
}

export default List;
