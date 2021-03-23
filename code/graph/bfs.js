/**
 * 广度优先遍历
 * 步骤：
 *  1. 新建一个队列，把根节点入队
 *  2. 对头出头并访问
 *  3. 把对头没有访问过的相邻节点入队
 *  4. 重复 2、3 步，直至队列为空
 */

// 图的邻接表
const graph ={
    0: [1, 2],
    1: [2],
    2: [ 3, 0],
    3: [3, 0],
}

const visited = new Set()

const bfs = (n) => {
    const quene = [n]
    visited.add(n)
    while(quene.length){
        const head = quene.shift()
        console.log(head)
        graph[head].forEach(i=>{
            if(!visited.has(i)){
                quene.push(i)
                visited.add(i)
            }
        })
    }
    
}

bfs(2)