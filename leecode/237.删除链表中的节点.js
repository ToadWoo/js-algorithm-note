/*
 * @lc app=leetcode.cn id=237 lang=javascript
 *
 * [237] 删除链表中的节点
 * 
 * 解题思路：
 * 由于只能拿到被删除节点，并不知道父节点是谁
 * 所以删除的办法就是把当前节点替换成下一个节点
 * 
 * 复杂度分析：
 * 时间复杂度：O(1)
 * 空间复杂度：O(1)
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {

    node.val = node.next.val
    node.next = node.next.next
    
};
// @lc code=end

