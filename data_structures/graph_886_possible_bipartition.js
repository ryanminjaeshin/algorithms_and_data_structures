var possibleBipartition = function(N, dislikes) {
  let visited = Array(N).fill(0);
  let graph = graphBuilder(N, dislikes);

  for (let i = 0; i < N; i ++) {
    if(visited[i] === 0 && !dfs(graph, i, visited, 1)) return false;
  }
  return true;
};

const graphBuilder = (N, dislikes) => {
  let graph = Array.from({length: n}, () => []);
  for (let edge of edges) {
    let [src, dist] = edge;
    graph[src-1].push(dist-1);
    graph[dist-1].push(src-1);
  }
  return graph;
}

const dfs = (graph, node, visited, group) => {
  visited[node] = group;
  let nodes = graph[node];
  for (let i = 0; i < nodes.length; i ++) {
    if (visited[nodes[i]] === group) return false;
    if (visited[nodes[i] === 0 && !dfs(graph, nodes[i], visited, -group)]) return false;
  }
  return true;
}