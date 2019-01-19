import Service from "./Service";

class TaskService extends Service {
  state = [];

  addTask({ id, name }) {
    const newState = {
      name,
      id
    };
    this.setState([...this.state, newState]);
  }

  getTasks() {
    return this.state;
  }
}

export default TaskService;
