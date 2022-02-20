class Queue {
  /** @type {{ value: any; priority: number;}[]} */
  #items;
  #capacity;

  /**
   * Constructor to initialize a queue
   * @param capacity {number?}
   */
  constructor(capacity = Number.MAX_SAFE_INTEGER) {
    this.#items = [];
    this.#capacity = capacity;
  }

  /**
   * Check if queue is empty
   * @return {boolean}
   */
  isEmpty() {
    return this.#items.length === 0;
  }

  /**
   * Check if queue is full
   * @return {boolean}
   */
  isFull() {
    return this.#items.length === this.#capacity;
  }

  /**
   * Pushes/inserts an element to the beginning of the queue with value and priority
   * @param element {{ value: any; priority: number;}}
   */
  enqueue(element) {
    if (this.isEmpty()) {
      this.#items.push(element);
      return
    }
    if (this.isFull()) {
      this.#items.pop();
    }
    let isAdded = false;
    for (let i = 0; i < this.size(); i++) {
      if (element.priority < this.#items[i].priority) {
        this.#items.splice(i, 0, element);
        isAdded = true;
        break;
      }
    }

    if (!isAdded) {
      this.#items.push(element)
    }
  }

  /**
   * Removes an element from the end of the queue, null if empty
   * and returns the removed element
   * @return {*}
   */
  dequeue() {
    if (this.isEmpty()) {
      return null
    }
    return this.#items.pop().value;
  }

  /**
   * Returns the front element
   * @return {undefined | any}
   */
  front() {
    return this.#items[this.size() - 1].value;
  }

  /**
   * Returns the back element
   * @return {undefined | any}
   */
  back() {
    return this.#items[0].value;
  }

  /**
   * Returns the size of the queue
   * @return {number}
   */
  size() {
    return this.#items.length;
  }
}

const queue = new Queue(5)
queue.enqueue({ priority: 1, value: 1 })
queue.enqueue({ priority: 2, value: 3 })
queue.enqueue({ priority: 50, value: 2 })
console.log(queue.dequeue())
console.log(queue.front())
console.log(queue.back())
