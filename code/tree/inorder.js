// 中序遍历
const binaryTree = {
    val: 5,
    left: {
        val: 2,
        left: {
            val: 1,
            left: null,
            right: null,
        },
        right: {
            val: 4,
            left: {
                val: 3,
                left: null,
                right: null,
            },
            right: null,
        },
    },
    right: {
        val: 6,
        left: null,
        right: {
            val: 7,
            left: null,
            right: null,
        },
    },
}

// 递归版
const inorderRecursion = (root)=>{
    if(!root) return
    inorderRecursion(root.left)
    console.log(root.val)
    inorderRecursion(root.right)
}

// 非递归版
const inorder = (root)=>{
    const stack = []
    let p = root
    while(stack.length || p){
        while(p){
            stack.push(p)
            p = p.left
        }
        const top = stack.pop()
        console.log(top.val)
        p = top.right
    }
}


inorder(binaryTree)