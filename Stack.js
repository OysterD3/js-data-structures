class Stack {
  #items;

  constructor() {
    this.#items = []
  }

  /**
   * Check if stack is empty
   * @return {boolean}
   */
  isEmpty() {
    return this.#items.length === 0;
  }

  /**
   * Pushes/inserts an element onto the top of the stack
   * @param element {any}
   */
  push(element) {
    this.#items.unshift(element);
  }

  /**
   * Removes an element from the top of the stack, null if empty
   * and returns the removed element
   * @return {null | any}
   */
  pop() {
    if (this.isEmpty()) {
      return null;
    }
    return this.#items.shift();
  }

  /**
   * Returns the top element, null if empty
   * @return {null | any}
   */
  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.#items[0];
  }

  /**
   * Returns the size of the stack
   * @return {number}
   */
  size() {
    return this.#items.length;
  }
}

const stacks = new Stack()
stacks.push(1)
stacks.push(2)
stacks.push(3)
stacks.push("Hello World!")
console.log(stacks.peek())
console.log(stacks.pop())
console.log(stacks.peek())
