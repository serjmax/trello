import Service from "./Service";

class BoardService extends Service {
  state = [];

  addBoard({ id, name }) {
    const newState = {
      name,
      id
    };
    this.setState([...state, newState]);
  }

  getBoards(){
    
  }

}

export default new BoardService();
