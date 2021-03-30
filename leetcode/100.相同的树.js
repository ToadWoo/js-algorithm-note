/*
 * @lc app=leetcode.cn id=100 lang=javascript
 *
 * [100] 相同的树
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {

    let isSame = true
    const rec = function(root1, root2){
        if(!root1 && !root2) return
        if(!root1 || !root2) {
            return isSame = false
        }
        if(root1.val !== root2.val){
            return isSame = false
        }

        if(isSame){
            rec(root1.left, root2.left)
            rec(root1.right, root2.right)
        }
    }

    rec(p, q)

    return isSame

};
// @lc code=end

