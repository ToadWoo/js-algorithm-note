// 先序遍历
const binaryTree = {
    val: 1,
    left: {
        val: 2,
        left: {
            val: 3,
            left: null,
            right: null,
        },
        right: {
            val: 4,
            left: {
                val: 5,
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
const preorderRecursion = (root)=>{
    if(!root) return
    console.log(root.val)
    preorderRecursion(root.left)
    preorderRecursion(root.right)
}

// 非递归版

const preorder = (root)=>{
    const stack = [root]
    while(stack.length){
        const p = stack.pop()
        console.log(p.val)
        p.right && stack.push(p.right)
        p.left && stack.push(p.left)
    }
}


preorder(binaryTree)