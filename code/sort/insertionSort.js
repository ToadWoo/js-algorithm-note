/**
 * 插入排序
 * 时间复杂度：O(n^2)
 * 
 * 思路：
 * 从第二个数开始往前比，如果比前者小就交换，如果没有比较大就插入
 */
Array.prototype.insertionSort = function(){

    for(let i=1; i<this.length; i++){
        const tmp = this[i]
        let j = i
        while(j>0){
            if(this[j-1] > tmp){
                this[j] = this[j-1]
            }else{
                break
            }
            j = j - 1
        }
        this[j] = tmp
    }


}

const arr = [5, 4, 3, 2, 1]

arr.insertionSort()
