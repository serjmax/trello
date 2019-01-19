import Service from "./Service";
import ListService from "./ListService";

class BoardService extends Service {
  state = [];

  addBoard({ id, name }) {
    const newState = {
      name,
      id,
      lists: new ListService()
    };
    this.setState([...this.state, newState]);
  }

  getBoards() {
    return this.state;
  }

  getBoardByName(name) {
    return this.state.find(board => board.name === name);
  }
}

export default new BoardService();
