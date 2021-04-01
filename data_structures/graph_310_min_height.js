var findMinHeightTrees = function(n, edges) {
  if (n === 1) return [0]
  let graph = buildGraph(n, edges);
  let leaves = [];

  // node with one neighbor is a leaf
  for (let i = 0; i < n; i ++) {
      if(graph.get(i).size === 1) {
          leaves.push(i)
      }
  }

  // remove leaf until there are at least two node
  while (n > 2) {
      n -= leaves.length;
      let newLeaves = [];

      // for (const leaf of leaves) {
      //     let neighbor = graph.get(leaf).values().next().value;
      //     graph.get(neighbor).delete(leaf);
      //     if(graph.get(neighbor).size === 1) newLeaves.push(neighbor)
      // }

      for (let i = 0; i < leaves.length; i ++) {
          let neighbor = graph.get(leaves[i]).values().next().value;
          graph.get(neighbor).delete(leaves[i]);
          if(graph.get(neighbor).size === 1) newLeaves.push(neighbor)
      }
      leaves = newLeaves;
  }
  return leaves;

};

const buildGraph = (n, edges) => {
  let graph = new Map();

  for (let i = 0; i < n; i ++) {
    graph.set(i, new Set());
  }
  for (let edge of edges) {
    let [src, dest] = edge;
    graph.get(src).add(dest);
    graph.get(dest).add(src);
  }
  return graph;
}