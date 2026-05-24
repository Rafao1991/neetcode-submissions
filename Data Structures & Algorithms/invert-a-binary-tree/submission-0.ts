/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {TreeNode}
     */
    invertTree(root: TreeNode | null): TreeNode {
        this.invertLeaves(root);
        return root;
    }

    private invertLeaves(root: TreeNode | null): void {
        if (root === null) return;
        if (root.left === null && root.right === null) return;

        const aux = root.left;
        root.left = root.right;
        root.right = aux;

        this.invertLeaves(root.left);
        this.invertLeaves(root.right);
    }
}
