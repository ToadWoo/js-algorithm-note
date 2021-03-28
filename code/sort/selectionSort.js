/**
 * 选择排序
 * 时间复杂度O(n^2)
 * 
 * 思路：
 * 1. 假设第一个为最小值，然后遍历数组找到更新最小值索引，遍历结束将最小值与一个值交换
 * 2. 继续假设第二个值为最小值，重复第一步的操作，直到倒数第二个数（因为重复length-1次后，最大值已经在最后了）
 */
Array.prototype.selectionSort = function(){
    for(let i = 0; i < this.length - 1; i++){
        let indexMin = i; // 最小值下标
        for(let j = i; j < this.length; j++){
            if(this[j] < this[indexMin]){
                indexMin = j
            }
        }
        if(i !== indexMin){
            const tmp = this[i]
            this[i] = this[indexMin]
            this[indexMin] = tmp
        }
    }
}

const arr = [5,4,3,2,1]

arr.selectionSort()

console.log(arr)