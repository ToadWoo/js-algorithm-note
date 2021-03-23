/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    
    if(!root) return false

    let res = false
    const dfs = (r, total = 0) => {   
        if(res) return // 已经找到了就不用再找了

        const newTotal = total + r.val
        if(newTotal === targetSum && !r.left && !r.right){
           return res = true
        }
        r.left &&  dfs(r.left, newTotal)
        r.right && dfs(r.right, newTotal)
    }

    dfs(root)

    return res

};
// @lc code=end

