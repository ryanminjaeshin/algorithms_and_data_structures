class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor(value) {
    this.root = new Node(value);
    this.count = 1;
  }

  size() {
    return this.count;
  }

  insert(value) {
    this.count ++;

    let newNode = new Node(value);

    const searchTree = node => {
      // if value < node.value, go left
      if (value < node.value) {
        // if no left child, append new node
        if (!node.left) {
          node.left = newNode;
        } else {
          // if left child exists, look left again
          searchTree(node.left);
        }

      // if value > node.value, go right
      } else if (value > node.value) {
        // if no right child, append new node
        if (!node.right) {
          node.right = newNode;
        } else {
          // if right child exists, look right again
          searchTree(node.right);
        }
      }
    }

    searchTree(this.root)
  }

  min() {
    let currentNode = this.root;

    while(currentNode.left) {
      currentNode = currentNode.left
    }

    return currentNode.value;
  }

  max() {
    let currentNode = this.root;

    while(currentNode.right) {
      currentNode = currentNode.right
    }

    return currentNode.value
  }

  contains(value) {
    let currentNode = this.root;

    while (currentNode) {
      if (value === currentNode.value) {
        return true;
      }

      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }

    return false;
  } 

  /* ------------ DFS traverse ------------ */
  // STACK LIFO
  // In-order
  // left root right
  dfsInOrder() {

    let result = [];

    const traverse = node => {
      
      if (!node) return;

      if (node.left) traverse(node.left)

      result.push(node.value)

      if (node.right) traverse(node.right)

    }

    traverse(this.root)

    return result
  }
  // Pre-order
  // root left right
  dfsPreOrder() {

    let result = [];

    const traverse = node => {
      
      if (!node) return;
      
      result.push(node.value)
      
      if (node.left) traverse(node.left)

      if (node.right) traverse(node.right)
      
    }

    traverse(this.root)

    return result
  }

  // Post-order
  // left right root
  dfsPostOrder() {

    let result = [];

    const traverse = node => {
            
      if (!node) return;
      
      if (node.left) traverse(node.left)

      if (node.right) traverse(node.right)

      result.push(node.value)
      
    }

    traverse(this.root)

    return result
  }

  /* ------------ BFS traverse ------------ */
  // QUEUE

  bfs() {
    let result = [];
    let queue = [];

    // Add root to the queue
    queue.push(this.root);

    // until queue is empty
    while(queue.length) {

      // take one out from the queue
      let currentNode = queue.shift();

      // Add current node to the result array
      result.push(currentNode.value)

      // If the current node has left node, add in to the queue
      if (currentNode.left) {
        queue.push(currentNode.left)
      } 

      // If the current node has right node, add in to the queue
      if (currentNode.right) {
        queue.push(currentNode.right)
      } 

    }

    return result
  }
  
}


const tree = new BST(16);
tree.insert(15)
tree.insert(8)
tree.insert(23)
tree.insert(33)
const bfs = tree.bfs();
console.log(bfs)


// Recap 12/16
// Recap 1/1
// Recap 