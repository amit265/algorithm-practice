// what is DFS(Depth First Search)

//DFS feels like recursion because it is.

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function dfs(node, visited = new Set()) {
  if (visited.has(node)) return;
  visited.add(node);

  for (let neighbor of graph[node]) {
    dfs(neighbor, visited);
  }
}






