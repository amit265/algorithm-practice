// Graph representation using adjacency list

// what is graph representation?

// Graph representation is a way of organizing and storing the information about a graph's structure, including its nodes (vertices) and the connections (edges) between them. Common methods of graph representation include adjacency lists, adjacency matrices, and edge lists.

// Mental model:

// “Representing a graph is like creating a map of cities (nodes) and the roads (edges) that connect them, allowing you to see how each city is linked to others.”

const graph = {
  A: ["B", "C"],
  B: ["D"],
  C: ["E"],
  D: [],
  E: [],
};

// Example usage:
console.log(graph);
// Output:
// {
//   A: ['B', 'C'],
//   B: ['D'],
//   C: ['E'],
//   D: [],
//   E: []
// }

// time complexity for adjacency list:
// - Space complexity: O(V + E) where V is the number of vertices and E is the number of edges
// - Checking if an edge exists: O(V) in the worst case
// - Iterating through all neighbors of a vertex: O(k) where k is the number of neighbors

// edge cases
console.log(graph["F"]); // Output: undefined (node F does not exist)
