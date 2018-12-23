import React, { Component } from "react";
import List from "../components/List";

class Lists extends Component {
  render() {
    return (
      <div className="Lists">
        {this.props.lists.map(list => {
          return <List list={list} key={list.id} />;
        })}
      </div>
    );
  }
}

export default Lists;
