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

/**
 * 递归版
 * 步骤：
 * 1. 访问根节点
 * 2. 对根节点的左子树进行先序遍历
 * 3. 对根节点的右子树进行先序遍历
 */
const preorderRecursion = (root) => {
    if(!root) return
    console.log(root.val)
    preorderRecursion(root.left)
    preorderRecursion(root.right)
}

// 非递归版
const preorder = (root) => {
    const stack = [root]
    while(stack.length){
        const p = stack.pop()
        console.log(p.val)
        p.right && stack.push(p.right)
        p.left && stack.push(p.left)
    }
}


preorder(binaryTree)