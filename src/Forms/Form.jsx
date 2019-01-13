import React, { Component } from "react";

class Form extends Component {
  onSubmit = e => {
    e.preventDefault();
    this.props.onAdd(this.nameInput.value);
    this.nameInput.value = "";
  };

  render() {
    return (
      <div className="Form">
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Add list</label>
            {/* //TODO: Почему здесь инпут так сделан? Почему не более классический вид с функцией onChange? */}
            <input
              //TODO: Не понимаю что означает строка ниже:
              ref={nameInput => (this.nameInput = nameInput)}
              placeholder="Enter list title"
              type="text"
            />
            <button type="submit">Add List</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
