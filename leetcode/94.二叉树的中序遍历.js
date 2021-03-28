/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
 * 
 * 复杂度分析：
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    
    /**
     * 非递归版
     */
    const stack = []
    let p = root
    const res = []

    while(stack.length || p){
        while(p){
            stack.push(p)
            p = p.left
        }
        const out = stack.pop()
        res.push(out.val)
        p = out.right
    }

    return res

    /**
     * 递归版
     */

    // const res = []

    // const inorder = (r)=>{
    //     if(!r) return 
    //     inorder(r.left)
    //     res.push(r.val)
    //     inorder(r.right)
    // }

    // inorder(root)
    // return res

};
// @lc code=end

