class MinHeap {
  #heap;

  constructor() {
    this.#heap = []
  }

  /**
   * Swaps the element within the heap
   * @param i {number}
   * @param j {number}
   * @param heap {number[]}
   */
  static #swap(i, j, heap) {
    const temp = heap[j];
    heap[j] = heap[i];
    heap[i] = temp;
  }

  /**
   * Swaps a largest node with its smallest child
   * @param currentIndex {number}
   * @param heap {number[]}
   */
  static #siftUp(currentIndex, heap) {
    let parentIndex = Math.floor((currentIndex - 1) / 2);
    while (currentIndex > 0 && heap[currentIndex] < heap[parentIndex]) {
      MinHeap.#swap(currentIndex, parentIndex, heap);
      currentIndex = parentIndex;
      parentIndex = Math.floor((currentIndex - 1) / 2);
    }
  }

  /**
   * Swaps a node that it too small with its parent
   * @param currentIndex {number}
   * @param endIndex {number}
   * @param heap {number[]}
   */
  static #siftDown(currentIndex, endIndex, heap) {
    let subIndex1 = currentIndex * 2 + 1;
    while (subIndex1 <= endIndex) {
      const subIndex2 = currentIndex * 2 + 2 <= endIndex ? currentIndex * 2 + 2 : -1;
      let indexToSwap;
      if (subIndex1 !== - 1 && heap[subIndex2] < heap[subIndex1]) {
        indexToSwap = subIndex2;
      } else {
        indexToSwap = subIndex1;
      }

      if (heap[indexToSwap] < heap[currentIndex]) {
        MinHeap.#swap(currentIndex, indexToSwap, heap);
        currentIndex = indexToSwap;
        subIndex1 = currentIndex * 2 + 1;
      } else {
        return
      }
    }
  }

  /**
   * Inserts an element to the heap
   * @param element {number}
   */
  insert(element) {
    this.#heap.push(element);
    MinHeap.#siftUp(this.#heap.length - 1, this.#heap);
  }

  /**
   * Removes the smallest node from the heap and return it
   * @return {*|null}
   */
  remove() {
    MinHeap.#swap(0, this.#heap.length - 1, this.#heap);
    console.log(this.#heap)
    const removed = this.#heap.pop();
    MinHeap.#siftDown(0, this.#heap.length - 1, this.#heap);
    return removed;
  }

  print() {
    console.log(this.#heap)
  }
}

const mh = new MinHeap()
mh.insert(48)
mh.insert(41)
mh.insert(24)
mh.insert(12)
mh.insert(15)
mh.insert(4)
mh.insert(11)
mh.print()
/**
 *            4
 *           /  \
 *         15   11
 *        / \   / \
 *       48 24 41 12
 */
mh.remove()
mh.print()
/**
 *            11
 *           /  \
 *         15   12
 *        / \   /
 *       48 24  41
 */
