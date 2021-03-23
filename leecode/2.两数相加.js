/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {

    let newNode = new ListNode()
    let p = newNode
    let f = 0

    while(l1 || l2){
        const v1 = l1 && l1.val || 0
        const v2 = l2 && l2.val || 0
        const t = (v1 + v2  + f ) % 10
        f = Math.floor((v1 + v2  + f) /10)
        p.next = new ListNode(t)
        l1 = l1 && l1.next || null
        l2 = l2 && l2.next || null
        p = p.next
    }

    if(f){
        p.next = new ListNode(f)
    }

    return newNode.next
};
// @lc code=end

