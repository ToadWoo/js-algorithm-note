
/**
 * 最小堆
 */
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

const h = new MinHeap()
//3,2,1,5,6,4
h.insert(3)
h.insert(2)
h.insert(1)
h.insert(5)
h.insert(6)
h.insert(5)

console.log(h.heap)


