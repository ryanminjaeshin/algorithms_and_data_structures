class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BTS {
  constructor(value) {
    this.root = new Node(value);
    this.size = 1;
  }

  size() {
    return this.size;
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

  // insertion recap

  insert(value) {
    let newNode = new Node(value);

    const searchTree = node => {
      
      if(value < node.value) {

        if (!node.left) {
          node.left = newNode;
        } else {
          searchTree(node.left);
        }

      } else {

        if (!node.right) {
          node.right = newNode;
        } else {
          searchTree(node.right);
        }
      }
    }

    searchTree(this.root);
  }
  

  // DFS traverse 

  // In-order

  // Pre-order

  // Post-order

}