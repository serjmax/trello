import React, { Component } from "react";

import "./style.css";

import List from "../../components/List";

import ListService from "../../Services/ListService";
import AddList from "../../Forms/AddList";

class Lists extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: true,
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
      name: this.state.listValue,
      id: Date.now()
    };
    ListService.addList(newList);
    this.setState({
      listValue: "",
      isMenuOpen: true
    });
  };

  handleToggleMenu = () => {
    this.setState({ isMenuOpen: !this.state.isMenuOpen });
  };

  componentDidUpdate = () => {
    console.log(this.props);
  };

  render() {
    return (
      <div className="lists">
        {ListService.getLists().map(list => (
          <List list={list} key={list.id} />
        ))}
        <AddList
          listValue={this.state.listValue}
          listChange={this.listChange}
          listSubmit={this.listSubmit}
          handleToggleMenu={this.handleToggleMenu}
          isMenuOpen={this.state.isMenuOpen}
        />
      </div>
    );
  }
}

export default Lists;
