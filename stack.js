class Stack {
  constructor() {
    this.top = 0;
    this.storage = {};
  }

  push(value) {
    this.storage[this.top] = value;
    this.top++;
  }
  pop() {
    if (this.storage[this.top - 1]) {
      let deletedItem = this.storage[this.top - 1];
      delete this.storage[this.top - 1];
      if (this.top > 0) {
        this.top--;
      }
      return deletedItem;
    } else {
      return "You don't have any value to pop!";
    }
  }
  size() {
    return this.top;
  }
}
