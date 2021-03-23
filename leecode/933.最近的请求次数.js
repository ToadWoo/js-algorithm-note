/*
 * @lc app=leetcode.cn id=933 lang=javascript
 *
 * [933] 最近的请求次数
 * 
 * 解题思路：
 * 利用队列先进先出的特点
 * 
 * 复杂度分析：
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 */

// @lc code=start

var RecentCounter = function() {
    this.queue = []
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    this.queue.push(t)
    while(this.queue[0]< t-3000){
        this.queue.shift()
    }
    return this.queue.length
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
// @lc code=end

