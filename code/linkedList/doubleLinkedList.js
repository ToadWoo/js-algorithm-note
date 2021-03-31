
// 链表
class ListNode {
    constructor(val){
        this.val = val ?? null
        this.next = null
        this.pre = null
    }
}   

// 双向链表
class DoubleLinkedList{

    constructor(){
       this.head = new ListNode()
       this.tail = new ListNode()
       this.head.next = this.tail
       this.tail.pre = this.head 
    }


    addToHead(newNode){
        newNode.next = this.head.next
        this.head.next.pre = newNode
        this.head.next = newNode
        newNode.pre = this.head
    }

    removeTail(){
        const tailNode = this.tail.pre
        tailNode.pre.next = this.tail
        this.tail.pre = tailNode.pre
    }

    moveToHead(node){
        // 解除自己
        node.pre.next = node.next
        node.next.pre = node.pre
        node.pre = null
        node.next = null
        this.addToHead(node)
    }
}