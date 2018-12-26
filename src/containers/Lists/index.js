import React, { Component } from "react";

import "./style.css";

import List from "../../components/List";

class Lists extends Component {
  render() {
    return (
      <div className="lists">
        {this.props.lists.map(list => {
          return <List list={list} key={list.id} />;
        })}
      </div>
    );
  }
}

export default Lists;
