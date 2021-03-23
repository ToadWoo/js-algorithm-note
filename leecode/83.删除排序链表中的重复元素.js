/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
 * 
 * 解题思路：
 * 遍历链表，由于链表是排序过的，所以判断当前节点与下个节点的值是否相等，相等则删除下个节点
 * 
 * 复杂度分析：
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 * 
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

    let p = head
    while(p && p.next){
        if(p.val === p.next.val){
            p.next = p.next.next
        }else{
            p = p.next
        }
    }
    return head

};
// @lc code=end

