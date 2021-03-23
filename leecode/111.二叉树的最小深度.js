/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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
var minDepth = function(root) {

    if(!root) return 0
    const quene = [[root, 1]]
    
    while(quene.length){
        const [head, l] = quene.shift()
        if(!head.left && !head.right) {
            return l
        }
        head.left && quene.push([head.left, l+1])
        head.right && quene.push([head.right, l+1])
    }

};
// @lc code=end

