/*
 * @lc app=leetcode.cn id=455 lang=javascript
 *
 * [455] 分发饼干
 */

// @lc code=start
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    const sortFn = function(a, b){
        return a-b
    }
    g.sort(sortFn)
    s.sort(sortFn)
    let i = 0
    s.forEach(j=>{
        if(j>=g[i]){
            i = i+1
        }
    })

    return i

};
// @lc code=end

