import Service from "./Service";
import TaskService from "./TaskService";

class ListService extends Service {
  state = [];

  addList({ id, name }) {
    const newState = {
      name,
      id,
      tasks: new TaskService()
    };
    this.setState([...this.state, newState]);
  }

  getLists() {
    return this.state;
  }
}

export default ListService;
