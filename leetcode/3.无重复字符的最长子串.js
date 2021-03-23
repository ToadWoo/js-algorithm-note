/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 * 解题思路：
 * 使用滑动窗口解法，
 * 使用两个指针，不断有移指针同时将每个字符存在map中，当遇到字典中已有的字符
 * 此时我们就要开始将左指针右移，移动已经记录的重复字符的位置
 * 在移动的过程中更新最大滑动窗口的长度，长度为两个指针之差
 * 
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const map = new Map()
    let p = 0
    let maxLen = 0
    for(let i=0; i<s.length; i++){
        const char = s[i]
        if(map.has(char) && map.get(char) >= p){
            p = map.get(char) + 1
        }
        map.set(char, i)
        maxLen = Math.max(maxLen, i-p+1)
    }

    return maxLen

};

// @lc code=end

