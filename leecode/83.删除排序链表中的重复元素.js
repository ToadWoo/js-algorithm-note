/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
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
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {

    let pre = head

    while(pre && pre.next){
        if((pre && pre.val) === pre.next.val){
            pre.next = pre.next.next
        }else{
            pre = pre.next
        }
    }
    return head

};
// @lc code=end

