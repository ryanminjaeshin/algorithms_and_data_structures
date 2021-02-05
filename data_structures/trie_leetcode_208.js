// https://leetcode.com/problems/implement-trie-prefix-tree/

class Trie {
  constructor() {
    this.root = {};
  }

  insert(word) {
    let node = this.root;
    for (let char of word) {
      if (node[char] == null) node[char] = {};
      node = node[char];
    }
    node.isWord = true;
  }

  traverse(word) {
    let node = this.root;
    for (let c of word) {
      node = node[c];
      if (node == null) return null;
    }
    return node;
  }

  search(word) {
    const node = this.traverse(word);
    return node !== null && node.isWord === true;
  }
}


const trie = new Trie();
trie.insert('ab');
trie.insert('ac');
trie.insert('abc');
console.log(trie);

// Recap
// Recap