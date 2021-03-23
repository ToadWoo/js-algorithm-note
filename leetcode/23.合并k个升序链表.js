/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个升序链表
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {

    if(!lists.length) return null

    const h = new MinHeap()
    let res = new ListNode(0)
    let p = res

    lists.forEach((node)=>{
        if(!node) return
        h.insert(node)
    })

    while(h.size()){
        const min = h.pop()
        p.next = min
        p = p.next
        min.next && h.insert(min.next)    
    }
  

    return res.next
};

class MinHeap{
    
    constructor(){
        this.heap = []
    }

    getParentIndex(index){
        return index -1 >> 1
    }

    getLeftIndex(index){
        return index * 2 + 1
    }

    getRightIndex(index){
        return index * 2 + 2
    }

    shiftUp(index){
        if(!index) return
        const parentIndex = this.getParentIndex(index)
        if(this.heap[parentIndex].val > this.heap[index].val){
            this.swap(parentIndex, index)
            this.shiftUp(parentIndex)
        }
    }

    shiftDown(index){
        const leftIndex = this.getLeftIndex(index)
        const rightIndex = this.getRightIndex(index)

        if(this.heap[leftIndex] && this.heap[index].val > this.heap[leftIndex].val){
            this.swap(leftIndex, index)
            this.shiftDown(leftIndex)
        }

        if(this.heap[rightIndex] && this.heap[index].val > this.heap[rightIndex].val){
            this.swap(rightIndex, index)
            this.shiftDown(rightIndex)
        }

    }

    swap(i1, i2){
        const tmp = this.heap[i1]
        this.heap[i1] = this.heap[i2]
        this.heap[i2] = tmp
    }

    insert(num){
        this.heap.push(num)
        this.shiftUp(this.heap.length-1)
    }

    pop(){
        if(this.heap.length === 1){
            return this.heap.shift()
        }
        const head = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.shiftDown(0)
        return head
    }

    size(){
        return this.heap.length
    }

    peek(){
        return this.heap[0]
    }
}
// @lc code=end

