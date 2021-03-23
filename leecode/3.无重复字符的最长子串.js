/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {

    const map = new Map()
    let maxLen = 0
    let p = 0
    
    for(let i=0; i<s.length; i++){
        if(map.has(s[i]) && map.get(s[i])>=p){
           p = map.get(s[i]) + 1
        }
        map.set(s[i], i)
        maxLen = Math.max(maxLen, i-p+1)
    }
    return maxLen

};

// @lc code=end

