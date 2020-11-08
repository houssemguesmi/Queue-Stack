class Queue {
  constructor() {
    this.front = 0;
    this.rear = 0;
    this.storage = {};
  }

  enqueue(value) {
    if (this.rear === 0) {
      this.storage[this.front] = value;
      this.rear++;
    } else {
      this.storage[this.rear] = value;
      this.rear++;
    }
  }
  dequeue() {
    if (this.storage[this.front]) {
      let deletedItem = this.storage[this.front];
      delete this.storage[this.front];
      this.front++;
      return deletedItem;
    } else {
      return "You don't have any value to dequeue!";
    }
  }
  size() {
    if (this.rear === 0) {
      return 0;
    } else {
      return this.rear;
    }
  }
}
