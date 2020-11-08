class Queue {
    constructor() {
        this.front = 0;
        this.rear = 0;
        this.storage = {};
    }

    enqueue(value) {
        if(this.rear === 0) {
            this.storage[this.front] = value;
            this.rear++;
        } else {
            this.storage[this.rear] = value;
            this.rear++;
        }
    }
    dequeue() {
        let deletedItem = this.storage[this.front]
        delete this.storage[this.front]
        for(var key in this.storage) {
            this.storage[key-1] = this.storage[key]
        }
        delete this.storage[this.rear-1]
        if(this.rear > 0) {
            this.rear--;
        }
        return deletedItem;
    }
    size() {
        if(this.rear === 0) {
            return 0;
        } else {
            return this.rear;
        }
    }
}