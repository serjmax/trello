import React, { PureComponent } from 'react';

class Board extends PureComponent {
  render() {
    return (
      <div className="Board">
        {this.props.board.title}
      </div>
    );
  }
}

export default Board;