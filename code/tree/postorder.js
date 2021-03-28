// 先序遍历
const binaryTree = {
    val: 7,
    left: {
        val: 4,
        left: {
            val: 1,
            left: null,
            right: null,
        },
        right: {
            val: 3,
            left: {
                val: 2,
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
            val: 5,
            left: null,
            right: null,
        },
    },
}

/**
 * 递归版
 * 
 * 步骤：
 * 1. 对根节点的左子树进行后序遍历
 * 2. 对根节点的右子树进行后序遍历
 * 3. 访问根节点
 */
const postorderRecursion = (root)=>{
    if(!root) return
    postorderRecursion(root.left)
    postorderRecursion(root.right)
    console.log(root.val)
}

// 非递归版
// 先序遍历逆向做法
const postorder = (root)=>{
    const stack = [root]
    const res = []
    while(stack.length){
        const p = stack.pop()
        p.left && stack.push(p.left)
        p.right && stack.push(p.right)
        res.push(p.val)
    }

    while(res.length){
        const c = res.pop()
        console.log(c)
    }
}


const postorder2 = (root) =>{
    const stack =[]
    let p = root
    let last = null

    while(stack.length || p){
        while(p){
            stack.push(p)
            p = p.left
        }
        const top = stack[stack.length - 1] // 取栈顶
        if(top.right === null || top.right === last){
            console.log(top.val)
            stack.pop() // 已访问，出栈
            last = top
        }else{
            p = top.right
        }
    }
    
}


postorder2(binaryTree)