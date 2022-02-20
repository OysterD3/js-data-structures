class MaxHeap {
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
   * Swaps a smallest node with its largest child
   * @param currentIndex {number}
   * @param heap {number[]}
   */
  static #siftUp(currentIndex, heap) {
    let parentIndex = Math.floor((currentIndex - 1) / 2);
    while (currentIndex > 0 && heap[currentIndex] > heap[parentIndex]) {
      MaxHeap.#swap(currentIndex, parentIndex, heap);
      currentIndex = parentIndex;
      parentIndex = Math.floor((currentIndex - 1) / 2);
    }
  }

  /**
   * Swaps a node that it too large with its parent
   * @param currentIndex {number}
   * @param endIndex {number}
   * @param heap {number[]}
   */
  static #siftDown(currentIndex, endIndex, heap) {
    let subIndex1 = currentIndex * 2 + 1;
    while (subIndex1 <= endIndex) {
      const subIndex2 = currentIndex * 2 + 2 <= endIndex ? currentIndex * 2 + 2 : -1;
      let indexToSwap;
      if (subIndex1 !== - 1 && heap[subIndex2] > heap[subIndex1]) {
        indexToSwap = subIndex2;
      } else {
        indexToSwap = subIndex1;
      }

      if (heap[indexToSwap] > heap[currentIndex]) {
        MaxHeap.#swap(currentIndex, indexToSwap, heap);
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
    MaxHeap.#siftUp(this.#heap.length - 1, this.#heap);
  }

  /**
   * Removes the largest node from the heap and return it
   * @return {*|null}
   */
  remove() {
    MaxHeap.#swap(0, this.#heap.length - 1, this.#heap);
    const removed = this.#heap.pop();
    MaxHeap.#siftDown(0, this.#heap.length - 1, this.#heap);
    return removed;
  }

  print() {
    console.log(this.#heap)
  }
}

const mh = new MaxHeap()
mh.insert(48)
mh.insert(24)
mh.insert(12)
mh.insert(41)
mh.insert(15)
mh.insert(4)
mh.insert(11)
mh.print()
/**
 *            48
 *           /  \
 *         41   12
 *        / \   / \
 *       24 15 4  11
 */
mh.remove()
mh.print()
/**
 *            41
 *           /  \
 *         24   12
 *        / \   /
 *       11 15 4
 */

