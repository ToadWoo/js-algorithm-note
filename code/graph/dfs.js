/**
 * 深度优先遍历
 * 步骤：
 *  1. 访问根节点
 *  2. 对根节点的没有访问过的相邻节点挨个进行深度优先遍历
 */

// 图的邻接表
const graph ={
    0: [1, 2],
    1: [2],
    2: [0, 3],
    3: [3],
}

const visited = new Set()

const dfs = (n) => {
    console.log(n)
    visited.add(graph[n])
    graph[n].forEach(i=>{
        if(!visited.has(graph[i])){
            dfs(i)
        }
    })
}

dfs(2)