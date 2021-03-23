/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {

    let depth  = 0

    const dfs = (r, l)=>{
        if(!r) return

        if(!r.right && !r.left){
            depth = Math.max(depth, l)
        }

        dfs(r.left, l+1)
        dfs(r.right, l+1)
    }

    dfs(root, 1)

    return depth

};
// @lc code=end

