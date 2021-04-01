/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
 var validTree = function(n, edges) {
  // No cycle && only one resion => true
  let graph = buildGraph(n, edges);
  let regions = 0;
  let visited = {};
  let parent = {};

  for (let v = 0; v < n; v ++) {
      if(!visited[v]) {
          regions ++;
          if (regions > 1) return false;
          if (isCycle(v, graph, visited, parent)) return false;
      }
  }
  return true;
};

const buildGraph = (n, edges) => {
  let graph = Array.from({length:n}, () => [])
  for (let edge of edges) {
      let [src, dest] = edge;
      graph[src].push(dest)
      graph[dest].push(src);
  }
  return graph;
}

const isCycle = (node, graph, visited, parent) => {
  let queue = [node];
  while (queue.length) {
      let currentNode = queue.shift();
      visited[currentNode] = true;
      for (let neighbor of graph[currentNode]) {
          if(!visited[neighbor]) {
              visited[neighbor] = true;
              parent[neighbor] = currentNode;
              queue.push(neighbor);
          } else {
              if(neighbor !== parent[currentNode]) return true;
          }
      }
  }
  return false;
}
