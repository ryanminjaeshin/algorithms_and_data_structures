var countComponents = function(n, edges) {
  let graph = buildGraph(n, edges);
  let visited = [];
  let res = 0;

  for (let i = 0; i < n; i ++) {
    visited.push(false);
  }

  for (let i = 0; i < n; i ++) {
    if(!visited[i]) {
      res ++;
      dfs(graph, i, visited);
    }
  }
  return res;
};

const buildGraph = (n, edges) => {
  let graph = Array.from({length: n}, () => []);
  for (let edge of edges) {
    let [src, dist] = edge;
    graph[src].push(dist);
    graph[dist].push(src);
  }
  return graph
}

const dfs = (graph, node, visited) => {
  visited[node] = true;
  let nodes = graph[node];
  for (let i = 0; i < nodes.length; i ++) {
    if (!visited[nodes[i]]) dfs(graph, nodes[i], visited)
  }
}

// recap