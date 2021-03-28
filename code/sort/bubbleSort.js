
/**
 * 冒泡排序
 * 时间复杂度O(n^2)
 * 
 * 思路：
 * 1. 第一个数与第二个数相比，如果前者比后者大就交换, 没有比较大就不交换， 接着第二个和第三个比较，以此类推
 * 2. 重复第一步，没执行一次，上一步操作就可以减少一次比较，因为大数已经跑到最后去了
 * 
 */
Array.prototype.bubbleSort = function() {
    console.log(this)
    for(let i = 0; i<this.length-1; i++){
        for(let j = 0; j<this.length-1-i; j++){
            if(this[j] > this[j + 1]){
                const tmp = this[j]
                this[j] = this[j+1]
                this[j+1] = tmp
            }
        }
    }
}

const arr = [5,1,1,7,6]

arr.bubbleSort()



