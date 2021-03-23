const tree = {
    val: 'a',
    children: [
        {
            val: 'b',
            children: [
                {
                    val: 'd',
                    children: []
                },
                {
                    val: 'e',
                    children: []
                }
            ]
        },
        {
            val: 'c',
            children: [
                {
                    val: 'f',
                    children: []
                },
                {
                    val: 'g',
                    children: []
                }
            ]
        }
    ]
}

/**
 * 深度优先遍历（depth-first-search）
 * 步骤：
 * 1.先访问根节点
 * 2.对根节点的子节点挨个进行深度优先遍历
 */
const dfs = (root)=>{
    console.log(root.val)
    root.children.forEach(dfs)
}

/**
 * 广度优先遍历 （breadth-first-search）
 * 步骤：
 * 1. 新建一个队列，把根节点入队
 * 2. 把对头出队并方位
 * 3. 将对头的子节点入队
 * 4. 重复2、3步，直至队列为空
 */
const bfs = (root)=>{
    const q = [root]
    while(q.length){
        const head = q.shift();
        console.log(head.val)
        head.children.forEach(child=>q.push(child))
    }
}


