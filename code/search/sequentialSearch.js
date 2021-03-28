
/**
 * 顺序搜索
 * 时间复杂度: O(n)
 */
Array.prototype.sequentialSearch = function(item){
    for(let i = 0; i<this.length; i++){
        if(this[i] === item) return i
    }
    return -1
}

const arr = [1,2,3,4,5]
const index = arr.sequentialSearch(3)

