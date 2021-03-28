/**
 * 归并排序
 * 时间复杂度：O(n*logN)
 * 
 * 思路：
 * 1. 分：每次都对半分成两个小数组，直到每个数组只有一个元素
 * 2. 合：将两个数组有序合并
 */

Array.prototype.mergeSort = function(){
    let rec = function(arr){
        if(arr.length === 1) return arr
        // 分
        const mid = Math.floor(arr.length/2)
        const left = arr.slice(0, mid)
        const right = arr.slice(mid, arr.length)

        const orderLeft = rec(left)
        const orderRight = rec(right)

        // 合
        const res = []
        while(orderLeft.length || orderRight.length){
            if(orderLeft.length && orderRight.length){
                res.push(orderLeft[0]<orderRight[0] ? orderLeft.shift() : orderRight.shift())
            }else if(orderLeft.length){
                res.push(orderLeft.shift())
            }else if(orderRight.length){
                res.push(orderRight.shift())
            }
        }
        return res
    }

    const res = rec(this)
    res.forEach((n, i)=>{
        this[i] = n
    })
}

const arr = [5,4,3,2,1]
arr.mergeSort()

console.log(arr)