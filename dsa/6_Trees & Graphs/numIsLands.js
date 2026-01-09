class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function numIslands(grid) {
  let count = 0;

  function dfs(r, c) {
    if (
      r < 0 || c < 0 ||
      r >= grid.length || c >= grid[0].length ||
      grid[r][c] === '0'
    ) return;

    grid[r][c] = '0';

    dfs(r + 1, c);
    dfs(r - 1, c);
    dfs(r, c + 1);
    dfs(r, c - 1);
  }

  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (grid[r][c] === '1') {
        count++;
        dfs(r, c);
      }
    }
  }
  return count;
}
