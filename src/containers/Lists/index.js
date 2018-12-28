import React, { Component } from "react";

import "./style.css";

import List from "../../components/List";

import ListService from "../../Services/ListService";
import AddList from "../../Forms/AddList";

class Lists extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: [],
      listValue: ""
    };
  }
  listChange = e => {
    this.setState({
      listValue: e.target.value
    });
  };

  listSubmit = e => {
    e.preventDefault();
    var newList = {
      listValue: this.state.listValue,
      id: Date.now()
    };
    this.setState({
      lists: [...this.state.lists, newList],
      listValue: ""
    });
  };

  // onAdd = name => {
  //   var newList = {
  //     name: name,
  //     id: Date.now()
  //   };
  //   ListService.addList(newList);
  //   this.forceUpdate();
  // };
  render() {
    return (
      <div className="lists">
        <AddList
          // onAdd={this.onAdd}
          listValue={this.state.listValue}
          listChange={this.listChange}
          listSubmit={this.listSubmit}
        />
        {/* {ListService.getLists().map(list => (
            <List list={list} key={list.id} />
          ))} */}
        {this.state.lists.map(list => {
          return <List list={list} key={list.id} />;
        })}
      </div>
    );
  }
}

export default Lists;
