import React, { PureComponent } from "react";

import "./style.css";

import Tasks from "../../containers/Tasks";

class List extends PureComponent {
  render() {
    const { name } = this.props.list;
    return (
      <div className="list">
        <div className="list__title">{name}</div>
        <Tasks />
      </div>
    );
  }
}

export default List;
