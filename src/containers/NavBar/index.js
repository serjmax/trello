import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./style.css";

class NavBar extends Component {
  render() {
    return (
      <div className="nav-bar">
        <Link to="/">Все доски</Link>
      </div>
    );
  }
}

export default NavBar;
