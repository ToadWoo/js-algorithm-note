/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */


var findKthLargest = function(nums, k) {

    const h = new MinHeap()

    nums.forEach(n=>{
        h.insert(n)
        if(h.size()>k){
            h.pop()
        }
    })
    return h.peek()

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
        if(this.heap[parentIndex] > this.heap[index]){
            this.swap(parentIndex, index)
            this.shiftUp(parentIndex)
        }
    }

    shiftDown(index){
        const leftIndex = this.getLeftIndex(index)
        const rightIndex = this.getRightIndex(index)

        if(this.heap[index] > this.heap[leftIndex]){
            this.swap(leftIndex, index)
            this.shiftDown(leftIndex)
        }

        if(this.heap[index] > this.heap[rightIndex]){
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
        this.heap[0] = this.heap.pop()
        this.shiftDown(0)
    }

    size(){
        return this.heap.length
    }

    peek(){
        return this.heap[0]
    }
}
// @lc code=end

