import Service from "./Service";

class BoardService extends Service {
  state = [];

  addBoard({ id, name }) {
    const newState = {
      name,
      id
    };
    this.setState([...this.state, newState]);
  }

  getBoards() {
    return this.state
  }
}

export default new BoardService();
