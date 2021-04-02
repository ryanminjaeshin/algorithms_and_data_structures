// Topological sort

var canFinish = function(numCourses, prerequisites) {
  let inDegree = new Array(numCourses).fill(0);
  let queue = [];

  for (let [course] of prerequisites) {
      inDegree[course] ++;
  }

  for (let course = 0; course < inDegree.length; course ++) {
      if (inDegree[course] === 0) {
          queue.push(course);
      }
  }

  let count = 0;

  while (queue.length) {
      let currentCourse = queue.pop();
      count ++;
      for (let [course, preq] of prerequisites) {
          if (preq === currentCourse) {
              inDegree[course] --;
              if (inDegree[course] === 0) {
                  queue.push(course)
              }
          }
      }
  }

  return numCourses === count;
};

// dfs

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
 var canFinish = function(nc, preqs) {
  let graph = buildGraph(nc,preqs);
  let visited = [];

  for (let i = 0; i < nc; i ++) {
      visited.push(0);
  }

  for (let i = 0; i < nc; i ++) {
      if(!dfs(graph, i, visited)) return false;
  }
  return true;
};

const buildGraph = (n, edges) => {
  let graph = Array.from({length: n}, () => []);

  for (let edge of edges) {
      let [src, dest] = edge;
      graph[dest].push(src);
  }

  return graph;
}

const dfs = (graph, node, visited) => {
  // 0 unvisited
  // -1 visiting
  // 1 visited

  if (visited[node] === -1) return false;
  if (visited[node] === 1) return true;
  visited[node] = -1;
  let nodes = graph[node];
  for (let i = 0; i < nodes.length; i ++) {
      if(!dfs(graph, nodes[i], visited)) return false;
  }
  visited[node] = 1;
  return true;
}

// recap