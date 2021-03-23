/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

/**
 * 解题思路：
 * 1. 同时遍历两个链表
 * 2. 将两个连个节点的值相加，取和的个位数创建新的节点
 * 3. 将节点插入到新的链表的末端，这里需要一个指针来维护链表的最后一个节点方便新节点的插入
 * 4. 需要注意的点，循环结束，如还有进位需要把这个进位创建一个新节点
 * 
 * 复杂度分析
 * 时间复杂度: O(n) n为两个链表长度的最大值
 * 空间复杂度: O(n) n为新链表的长度
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

    let carry = 0
    const res = new ListNode()
    let p = res

    while(l1 || l2){
        const v1 = l1 && l1.val || 0
        const v2 = l2 && l2.val || 0
        const v = (v1 + v2 + carry) % 10 // 两数相加的个位数
        carry = Math.floor((v1 + v2 + carry) / 10)
        l1 && (l1 = l1.next)
        l2 && (l2 = l2.next)
        const node = new ListNode(v)
        p.next = node
        p = p.next
    }

    // 最后的进位要创建新节点
    if(carry){
        p.next = new ListNode(carry)
    }

    return res.next

};
// @lc code=end

