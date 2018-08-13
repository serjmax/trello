import React, { PureComponent } from "react";

class Board extends PureComponent {
  render() {
    return (
      <div className="Board">
        <div className="title">{this.props.board.title}</div>
        
        <form
          onSubmit={e => this.props.taskSubmit(e)}
        >
          <div>
            <input
              onChange={this.props.handleChange}
              value={this.props.inputValue}
              placeholder="New task"
              type="text"
            />
            <button type="submit">
              Add
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Board;
