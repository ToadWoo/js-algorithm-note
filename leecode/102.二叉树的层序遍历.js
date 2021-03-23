/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root) return []

    const quene = [root]
    const res = []

    while(quene.length){
        let len = quene.length
        res.push([])
        while(len--){
            const head = quene.shift()
            res[res.length-1].push(head.val)
            head.left && quene.push(head.left)
            head.right && quene.push(head.right)
        }
    }

    return res


};

// @lc code=end

