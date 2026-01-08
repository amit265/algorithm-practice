class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}


function bfs(start) {
  let visited = new Set();
  let queue = [start];

  while (queue.length) {
    let node = queue.shift();
    if (visited.has(node)) continue;

    visited.add(node);
    for (let neighbor of graph[node]) {
      queue.push(neighbor);
    }
  }
}
