/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {

    const need = new Map()

    for(let i=0; i<t.length; i++){
        need.set(t[i], need.has(t[i]) ? need.get(t[i])+ 1 : 1)
    }

    let needCount = need.size
    let l = 0
    let r = 0
    let res = ''

    for(let i=0; i<s.length; i++){
        const c = s[i]
        if(need.has(c)){
            need.set(c, need.get(c) - 1)
            if(need.get(c) === 0) needCount = needCount - 1
        }

        while(needCount === 0){
            const newRes = s.substring(l, r + 1)
            res = (!res || newRes.length < res.length) ? newRes : res
            const d = s[l]
            if(need.has(d)){
                need.set(d, need.get(d) + 1)
                if(need.get(d) > 0) needCount = needCount + 1
            }
            l = l + 1
        }

        r = r + 1
    }   
    return res

};

// @lc code=end

