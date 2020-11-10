class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  addToTail(value) {
    var newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      var current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.tail = newNode;
  }
  printList() {
    var current = this.head;
    console.log("Head ", current.value);
    while (current.next) {
      current = current.next;
      if (!current.next) {
        console.log("Tail ", current.value);
      } else {
        console.log("Node ", current.value);
      }
    }
  }
  removeHead() {
    this.head = this.head.next;
  }
  changeHead(value) {
    var newNode = new Node(value);
    newNode.next = this.head.next;
    this.head = newNode;
  }
  addAtHead(value) {
    var newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
  }
  contains(target) {
    var current = this.head;
    while (current.next) {
      if (current.value == target) {
        return true;
      }
      current = current.next;
    }
    if (current.value == target) {
      return true;
    }
    return false;
  }
  addAtIndex(value, index) {
    var newNode = new Node(value);
    var current = this.head;
    var count = 1;
    while (count < index) {
      count++;
      current = current.next;
    }
    newNode.next = current.next;
    current.next = newNode;
  }
  removeFromIndex(index) {
    var previous;
    var current = this.head;
    var count = 0;
    while (count < index) {
      count++;
      previous = current;
      current = current.next;
    }
    previous.next = current.next;
  }
  getAtIndex(index) {
    var current = this.head;
    var count = 1;
    while (count < index) {
      count++;
      current = current.next;
    }
    return "The value at the index " + index + " is " + current.value;
  }
}
var ll = new LinkedList();
ll.addToTail(100);
ll.addToTail(200);
ll.addToTail(300);
ll.addToTail(400);
ll.addAtIndex(100, 2);
ll.removeFromIndex(2);
console.log(ll.getAtIndex(2));
ll.addAtHead(0);
ll.printList();
