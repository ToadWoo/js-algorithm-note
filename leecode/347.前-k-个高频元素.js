/*
 * @lc app=leetcode.cn id=347 lang=javascript
 *
 * [347] 前 K 个高频元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const map = new Map()

    nums.forEach(n=>{
        map.set(n, map.has(n) ? map.get(n) + 1 : 1)
    })

    const h = new MinHeap()
    
    map.forEach((value, key)=>{
        h.insert({value, key})
        if(h.size()> k){
            h.pop()
        }
    })

    return h.heap.map(i=>i.key)

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
        if(this.heap[parentIndex].value > this.heap[index].value){
            this.swap(parentIndex, index)
            this.shiftUp(parentIndex)
        }
    }

    shiftDown(index){
        const leftIndex = this.getLeftIndex(index)
        const rightIndex = this.getRightIndex(index)

        if(this.heap[leftIndex] && this.heap[index].value > this.heap[leftIndex].value){
            this.swap(leftIndex, index)
            this.shiftDown(leftIndex)
        }

        if(this.heap[rightIndex] && this.heap[index].value > this.heap[rightIndex].value){
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

