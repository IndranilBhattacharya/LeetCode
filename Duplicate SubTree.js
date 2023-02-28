/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} node
 * @param {{string:TreeNode[]}} subT
 * @param {TreeNode[]} duplicates
 */
const preorder = (node, subT, duplicates) => {
  if (!node) {
    return "#";
  }
  const serializedNodes = `${node.val}, ${preorder(
    node.left,
    subT,
    duplicates
  )}, ${preorder(node.right, subT, duplicates)}`;
  if (!subT[serializedNodes]) {
    subT[serializedNodes] = [node];
  } else if (subT[serializedNodes]?.length === 1) {
    duplicates.push(node);
    subT[serializedNodes].push(node);
  }
  return serializedNodes;
};

/**
 * @param {TreeNode} root
 * @return {TreeNode[]}
 */
const findDuplicateSubtrees = function (root) {
  const subTrees = {};
  const result = [];

  preorder(root, subTrees, result);
  return result;
};
