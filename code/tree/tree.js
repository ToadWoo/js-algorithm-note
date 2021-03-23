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

const dfs = (root)=>{
    console.log(root.val)
    root.children.forEach(dfs)
}

const bfs = (root)=>{
    const q = [root]
    while(q.length){
        const head = q.shift();
        console.log(head.val)
        head.children.forEach(child=>q.push(child))
    }
}


