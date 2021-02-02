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
}

const trie = new Trie();
trie.insert('ab');
trie.insert('ac');
trie.insert('abc');
console.log(trie);