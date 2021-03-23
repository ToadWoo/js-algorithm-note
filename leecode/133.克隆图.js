/*
 * @lc app=leetcode.cn id=133 lang=javascript
 *
 * [133] 克隆图
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
 var cloneGraph = function(node) {

    if(!node) return []

    const visited = new Map()
    
    const dfs =(n)=>{
        if(!n) return
        const nCopy = new Node(n.val)
        visited.set(n, nCopy)
        (n.neighbors || []).forEach(item=>{
            if(!visited.has(item) ){
                dfs(item)
            }
            nCopy.neighbors.push(visited.get(item))
        })
    }

    dfs(node)


    return visited.get(node)
    
};




// @lc code=end

