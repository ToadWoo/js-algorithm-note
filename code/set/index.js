/**
 * 集合常见操作
 */

// 去重
const arr = [1,1,2,2]
const newArr = [...new Set(arr)]

// 判断元素是否在集合中
const set = new Set(arr)
set.has(2) // true

// 求交集
const set1 = new Set([1,2,3])
const set2 = new Set([2,4,5])
const intersection = new Set([...set2].filter(i=>set1.has(i)))

// set 与 array 互转
const set4 = new Set([1,2,3])
const arr4 = [...set4]
const arr5 = Array.from(set4)

// set 的遍历
for(let item of set4){
    console.log(item)
}
