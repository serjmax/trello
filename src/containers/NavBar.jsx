import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <div>
        <Link to="/">Все доски</Link>
      </div>
    );
  }
}

export default NavBar;
