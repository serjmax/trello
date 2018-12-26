import React, { Component } from "react";

class AddBoard extends Component {
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
            <label>Новая доска</label>
            {/* //TODO: Почему здесь инпут так сделан? Почему не более классический вид с функцией onChange? */}
            <input
              //TODO: Не понимаю что означает строка ниже:
              ref={nameInput => (this.nameInput = nameInput)}
              placeholder="Название доски"
              type="text"
            />
            <button type="submit">Создать</button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddBoard;
