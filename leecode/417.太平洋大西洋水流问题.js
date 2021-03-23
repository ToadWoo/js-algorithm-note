/*
 * @lc app=leetcode.cn id=417 lang=javascript
 *
 * [417] 太平洋大西洋水流问题
 */

/**
 * 解题思路：
 * 1. 图的深度优先遍历
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var pacificAtlantic = function(matrix) {
    if(!matrix || !matrix[0] || !matrix[0].length) return []

    const m = matrix.length // 行数
    const n = matrix[0].length // 列数

    // 存放能流向太平洋的数据
    const flow1 = Array.from({length: m}, () => new Array(n).fill(false))
    // 存放能流向大西洋的数据
    const flow2 = Array.from({length: m}, () => new Array(n).fill(false))

    const dfs = (r, c, flow) =>{
        flow[r][c] = true
        const nearby = [[r-1, c], [r+1, c], [r, c-1], [r, c+1]]
        nearby.forEach(([nr, nc])=>{
            if(
                // 确保在坐标在矩阵中
                nr>=0 && nr<m &&
                nc>=0 && nc<n &&
                    // 确保未读
                    !flow[nr][nc] &&
                // 确保逆流而上
                matrix[nr][nc] >= matrix[r][c] 
                
            ){
                dfs(nr, nc, flow)
            }
        })
    }

    // 多管齐下，从各个海岸开始遍历
    for(let r=0; r<m; r++){
        dfs(r, 0, flow1) // 左边界
        dfs(r, n-1, flow2) // 右边界
    }
    for(let c=0; c<n; c++){
        dfs(0, c, flow1) // 上边界
        dfs(m-1, c, flow2) // 下边界
    }

    // 找出两个矩阵都为true的坐标
    const res = []
    for(let r=0; r<m; r++){
        for(let c=0; c<n; c++){
            if(flow1[r][c] && flow2[r][c]){
                res.push([r, c])
            }
        }
    }
    return res
};




// @lc code=end

