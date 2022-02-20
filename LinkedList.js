class Node {
  constructor(data) {
    this.element = data;
    this.next = null;
  }
}

class LinkedList {
  #head
  #size;

  constructor() {
    this.#head = null;
    this.#size = 0;
  }

  /**
   * Check if the list is empty
   * @return {boolean}
   */
  isEmpty() {
    return this.#size === 0;
  }

  /**
   * Adds element to the end of the list
   * @param element {any}
   */
  add(element) {
    const node = new Node(element);
    if (this.#head === null) {
      this.#head = node;
    } else {
      let currentNode = this.#head;

      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = node;
    }
    this.#size++;
  }

  /**
   * Adds element to a specific index in the list
   * @param element {any}
   * @param index {number}
   */
  addAt(element, index) {
    if (index < 0 || index > this.#size) {
      throw Error("Invalid index")
    }
    let node = new Node(element);
    let currentNode = this.#head;
    let previousNode;

    if (index === 0) {
      node.next = this.#head;
      this.#head = node;
    } else {
      for (let i = 0; i < index; i++) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }

      node.next = currentNode;
      previousNode.next = node;
    }

    this.#size++;
  }

  /**
   * Removes element from a specific index in the list, returns it
   * @param index {number}
   * @return {any}
   */
  removeFrom(index) {
    if (index < 0 || index > this.#size) {
      throw Error("Invalid index")
    }
    let currentNode = this.#head;
    let previousNode = currentNode;

    if (index === 0) {
      this.#head = currentNode.next;
    } else {
      for (let i = 0; i < index; i++) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }

      previousNode.next = currentNode.next;
    }

    this.#size++;
    return currentNode.element;
  }

  /**
   * Removes an element from the list
   * @param element
   * @return {*}
   */
  removeElement(element) {
    let currentNode = this.#head;
    let previousNode;
    if (currentNode.element === element) {
      this.#head = currentNode.next;
      return currentNode.element;
    }
    while (currentNode.element !== element) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }

    previousNode.next = currentNode.next;
  }

  /**
   * Check the element's index in the list
   * @param element {any}
   * @return {number}
   */
  indexOf(element) {
    let count = 0;
    let currentNode = this.#head;

    while (currentNode != null) {
      if (currentNode.element === element) return count;
      count++;
      currentNode = currentNode.next;
    }

    // not found
    return -1;
  }

  print() {
    let currentNode = this.#head;
    const arr = [];
    while (currentNode) {
      arr.push([arr.length, currentNode.element])
      currentNode = currentNode.next
    }
    console.log(arr);
  }
}

const linkedList = new LinkedList()
console.log(linkedList.isEmpty());
linkedList.add(24)
linkedList.add(4)
linkedList.add(97)
linkedList.print()
linkedList.removeElement(4)
linkedList.print()
linkedList.addAt(4, 1)
linkedList.print()
