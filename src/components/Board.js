import React, { Component } from 'react';

class Board extends Component {
  render() {
    return (
      <div className="Board">
        {this.props.board.title}
      </div>
    );
  }
}

export default Board;