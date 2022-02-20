/* Binary Search Tree */

class Node {
  constructor(element, left = null, right = null) {
    this.element = element;
    this.left = left;
    this.right = right;
  }
}

class BST {
  #root

  constructor() {
    this.#root = null;
  }

  /**
   * Adds element to tree
   * @param element
   * @return {number | undefined}
   */
  add(element) {
    const node = this.#root;
    if (node === null) {
      this.#root = new Node(element);
      return;
    }
    const searchTree = function(node) {
      if (element < node.element) {
        if (node.left === null) {
          node.left = new Node(element);
        } else {
          return searchTree(node.left);
        }
      } else if (element > node.element) {
        if (node.right === null) {
          node.right = new Node(element);
        } else {
          return searchTree(node.right);
        }
      } else {
        return null;
      }
    };
    return searchTree(node);
  }

  /**
   * Returns the minimum element from the tree
   * @return {number}
   */
  findMin() {
    let current = this.#root;
    while (current.left !== null) {
      current = current.left;
    }
    return current.element;
  }

  /**
   * Returns the maximum element from the tree
   * @return {number}
   */
  findMax() {
    let current = this.#root;
    while (current.right !== null) {
      current = current.right;
    }
    return current.element;
  }

  /**
   * Returns the node of the element, null if not found
   * @param element {number}
   * @return {null | Node}
   */
  find(element) {
    let current = this.#root;
    while (current.element !== element) {
      if (element < current.element) {
        current = current.left;
      } else {
        current = current.right;
      }
      if (current === null) {
        return null;
      }
    }
    return current;
  }

  /**
   * Removes an specific element from the tree
   * @param element {number}
   */
  remove(element) {
    const removeNode = function(node, element) {
      if (node == null) {
        return null;
      }
      if (element === node.element) {
        // node has no children
        if (node.left == null && node.right == null) {
          return null;
        }
        // node has no left child
        if (node.left == null) {
          return node.right;
        }
        // node has no right child
        if (node.right == null) {
          return node.left;
        }
        // node has two children
        let tempNode = node.right;
        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }
        node.element = tempNode.element;
        node.right = removeNode(node.right, tempNode.element);
        return node;
      } else if (element < node.element) {
        node.left = removeNode(node.left, element);
        return node;
      } else {
        node.right = removeNode(node.right, element);
        return node;
      }
    }
    this.#root = removeNode(this.#root, element);
  }

  /**
   * 1. Traverse the left subtree
   * 2. Visit the root
   * 3. Traverse the right subtree
   * @param node {null | Node}
   * @param arr {number[]}
   * @return {null|number[]}
   */
  inOrder(node = this.#root, arr = []) {
    if (node !== null) {
      node.left && this.inOrder(node.left, arr)
      arr.push(node.element)
      node.right && this.inOrder(node.right, arr)

      return arr;
    }

    return null;
  }

  /**
   * 1. Visit the root
   * 2. Traverse the left subtree
   * 3. Traverse the right subtree
   * @param node {null | Node}
   * @param arr {number[]}
   * @return {null|number[]}
   */
  preOrder(node = this.#root, arr = []) {
    if (node !== null) {
      arr.push(node.element)
      node.left && this.inOrder(node.left, arr)
      node.right && this.inOrder(node.right, arr)

      return arr;
    }

    return null;
  }

  /**
   * 1. Traverse the left subtree
   * 2. Traverse the right subtree
   * 3. Visit the root
   * @param node {null | Node}
   * @param arr {number[]}
   * @return {null|number[]}
   */
  postOrder(node = this.#root, arr = []) {
    if (node !== null) {
      node.left && this.inOrder(node.left, arr)
      node.right && this.inOrder(node.right, arr)
      arr.push(node.element)

      return arr;
    }

    return null;
  }
}



const bst = new BST();

bst.add(9);
bst.add(4);
bst.add(17);
bst.add(3);
bst.add(6);
bst.add(22);
bst.add(5);
bst.add(7);
bst.add(20);

bst.add(10);
console.log(bst.inOrder());
console.log(bst.preOrder());
console.log(bst.postOrder());
console.log(bst.postOrder());
console.log(bst.findMin());
console.log(bst.findMax());
console.log(bst.find(17));
