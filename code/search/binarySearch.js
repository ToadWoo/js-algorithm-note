/**
 * 二分搜索 (前提是有序数组)
 * 时间复杂度：O(logN)
 */
Array.prototype.binarySearch = function(item){
    let low = 0
    let high = this.length - 1 
    while(low<=high){
        const mid = Math.floor((low+high)/2)
        const element = this[mid]
        if(element > item){
            high = mid - 1
        }else if(element < item){
            low = mid + 1
        }else{
            return mid
        }
    }
    return -1
}

const arr = [1,2,3,4,5]