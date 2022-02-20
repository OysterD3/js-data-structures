class Queue {
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
   * Pushes/inserts an element to the beginning of the queue
   * @param element {any}
   */
  enqueue(element) {
    if (this.isFull()) {
      this.#items.pop()
    }
    this.#items.unshift(element);
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
    return this.#items.pop();
  }

  /**
   * Returns the front element
   * @return {undefined | any}
   */
  front() {
    return this.#items[this.size() - 1];
  }

  /**
   * Returns the back element
   * @return {undefined | any}
   */
  back() {
    return this.#items[0];
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
queue.enqueue(1)
queue.enqueue(2)
console.log(queue.dequeue())
queue.enqueue(3)
console.log(queue.front())
console.log(queue.back())
