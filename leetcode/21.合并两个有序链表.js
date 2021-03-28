/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
var mergeTwoLists = function(l1, l2) {

    const newListNode = new ListNode()
    let p = newListNode

    while(l1 && l2){
        const v1 = l1.val
        const v2 = l2.val
        const n = new ListNode()

        if(v1 < v2){
            l1 = l1.next
        }else{
            l2 = l2.next
        }

        n.val = Math.min(v1, v2)

        p.next = n
        p = p.next
    }

    if(l1){
        p.next = l1
    }
    if(l2){
        p.next = l2
    }

    return newListNode.next

};
// @lc code=end

