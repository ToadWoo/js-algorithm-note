/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
 * 
 * 解题思路：
 * 使用双指针遍历链表
 * 
 * 复杂度分析
 * 时间复杂度：O(n) n为节点数量
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
var reverseList = function(head) {

    let p1 = null
    let p2 = head

    while(p2){
        let tmp = p2.next
        p2.next = p1
        p1 = p2
        p2 = tmp
    }
    return p1
};

// 递归方法
// var reverseList = function(head) {

//     if(!head || !head.next) return head
//     // 递的步骤，传入当前节点的下一个节点，直到链表末端
//     const cur = reverseList(head.next)
//     head.next.next = head // 反转指向
//     head.next = null // 切断原来的指向
//     return cur
// };
// @lc code=end

