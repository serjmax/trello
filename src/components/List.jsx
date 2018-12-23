import React, { PureComponent } from "react";
import Tasks from "../containers/Tasks";

class List extends PureComponent {
  render() {
    return (
      <div className="List">
        <div className="title">{this.props.list.name}</div>
        <Tasks />
      </div>
    );
  }
}

export default List;
