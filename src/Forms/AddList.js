import React, { Component } from "react";

class AddList extends Component {
  // onSubmit = e => {
  //   e.preventDefault();
  //   this.props.onAdd(this.nameInput.value);
  //   this.nameInput.value = "";
  // };

  render() {
    return (
      <div className="add-list">
        <form onSubmit={this.props.listSubmit}>
          <div>
            <input
              onChange={this.props.listChange}
              value={this.props.listValue}
              placeholder="Название колонки"
              type="text"
            />
            <button type="submit">Добавить колонку</button>
          </div>
        </form>
      </div>
      // <div className="add-list">
      //   <form onSubmit={this.onSubmit}>
      //     <div>
      //       <input
      //         ref={nameInput => (this.nameInput = nameInput)}
      //         placeholder="Название колонки"
      //         type="text"
      //       />
      //       <button type="submit">Добавить колонку</button>
      //     </div>
      //   </form>
      // </div>
    );
  }
}

export default AddList;
