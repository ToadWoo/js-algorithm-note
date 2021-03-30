/*
 * @lc app=leetcode.cn id=63 lang=javascript
 *
 * [63] 不同路径 II
 */

// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    const m = obstacleGrid.length
    const n = obstacleGrid[0].length
    // const dp = Array(m).fill(Array(n).fill(1))

    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            if(obstacleGrid[i][j] === 1){
                obstacleGrid[i][j] = 0
            }else{
                if(i === 0 && j===0){
                    obstacleGrid[i][j] = 1
                }else if(i === 0  && obstacleGrid[i][j-1] === 0){
                    obstacleGrid[i][j] = 0
                }else if(j === 0  && obstacleGrid[i-1][j] === 0){
                    obstacleGrid[i][j] = 0
                }else if(i === 0 || j === 0){
                    obstacleGrid[i][j] = 1
                }else{
                    obstacleGrid[i][j] = obstacleGrid[i-1][j] + obstacleGrid[i][j-1]
                }  
            }
        }
    }
    return obstacleGrid[m-1][n-1]
};
// @lc code=end

