/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 * 
 * 解题思路
 * 快满指针法：
 * 利用Floyd判圈算法（也称龟兔赛跑算法）
 * 即如果链表中存在环，那么一个快一个慢的循环，两者一定能相遇
 * 当然也可以使用哈希表来解决，但是空间复杂度会是O(n)
 * 
 * 复杂度分析：
 * 时间复杂度：O(n)
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
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let p1 = head
    let p2 = head
    while(p1 && p2 && p2.next){
        p1 = p1.next
        p2 = p2.next.next
        if(p1 === p2) return true
    }

    return false
};
// @lc code=end

