/**
 * 快速排序
 * 时间复杂度：O(n*logN)
 * 思路：
 * 找基准，比基准大的放一组，比基准小的放一组，基准值放中间，递归直到每一组只有一个元素
 * 
 */
Array.prototype.quickSort = function(){

    const rec = function(arr){
        if(arr.length <= 1) return arr
        const left = []
        const right = []
        const mid = arr[0] // 基准
        for(let i =1; i<arr.length; i++){
            if(arr[i] < mid){
                left.push(arr[i])
            }else{
                right.push(arr[i])
            }
        }
        return [...rec(left), mid, ...rec(right)]
    }

    const res = rec(this)
    res.forEach((n, i)=>{
        this[i] = n
    })
}

const arr = [1,4,2,3,5,6]

arr.quickSort()