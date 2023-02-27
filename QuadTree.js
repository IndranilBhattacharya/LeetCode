/**
 * Definition for a QuadTree node.
 * function Node(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {
 *    this.val = val;
 *    this.isLeaf = isLeaf;
 *    this.topLeft = topLeft;
 *    this.topRight = topRight;
 *    this.bottomLeft = bottomLeft;
 *    this.bottomRight = bottomRight;
 * };
 */

/**
 * @param {number[][]} grid
 * @param {number} si Start row Index
 * @param {number} ei End row Index
 * @param {number} sj Start column Index
 * @param {number} ej End column Index
 * @returns {Node}
 */
let recurse = (grid, si, ei, sj, ej) => {
  let val = grid[si][sj];
  const node = new Node();
  node.val = val;
  for (let i = si; i < ei; i++) {
    for (let j = sj; j < ej; j++) {
      if (grid[i][j] !== val) {
        node.isLeaf = false;
        node.topLeft = recurse(
          grid,
          si,
          si + (ei - si) / 2,
          sj,
          sj + (ej - sj) / 2
        );
        node.topRight = recurse(
          grid,
          si,
          si + (ei - si) / 2,
          sj + (ej - sj) / 2,
          ej
        );
        node.bottomLeft = recurse(
          grid,
          si + (ei - si) / 2,
          ei,
          sj,
          sj + (ej - sj) / 2
        );
        node.bottomRight = recurse(
          grid,
          si + (ei - si) / 2,
          ei,
          sj + (ej - sj) / 2,
          ej
        );
        return node;
      }
    }
  }
  node.isLeaf = true;
  node.topLeft = null;
  node.topRight = null;
  node.bottomLeft = null;
  node.bottomRight = null;
  return node;
};

/**
 * @param {number[][]} grid
 * @return {Node}
 */
const construct = function (grid) {
  const n = grid.length;
  const tree = recurse(grid, 0, n, 0, n);
  return tree;
};
