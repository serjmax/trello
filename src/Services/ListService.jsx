import Service from "./Service";

class ListService extends Service {
  state = [];

  addList({ id, name }) {
    const newState = {
      name,
      id
    };
    this.setState([...this.state, newState]);
  }

  getLists() {
    return this.state
  }
}

export default new ListService();
