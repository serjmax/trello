class Service {
  subscribers = [];
  state = {};

  publish(data) {
    this.subscribers.forEach(function(subscriber) {
      subscriber(data);
    });
  }

  subscribe(subscriber) {
    if (!this.subscribers.includes(subscriber)) {
      this.subscribers = [...subscribers, subscriber];
    }
  }

  setState(state) {
    this.state = state;
    this.publish(state);
  }
}
