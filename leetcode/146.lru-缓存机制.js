/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU 缓存机制
 */


// @lc code=start


// 链表
class ListNode {
    constructor(key, val){
        this.val = val ?? null
        this.key = key ?? null
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
        return tailNode
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

/**
 * @param {number} capacity
 */

var LRUCache = function(capacity) {
    this.capacity = capacity
    this.hashtable = new Map()
    this.linkedList = new DoubleLinkedList()

};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if(this.hashtable.has(key)){
        const node = this.hashtable.get(key)
        this.linkedList.moveToHead(node)
        return node.val
    }
    return -1
};


/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    const size = this.hashtable.size
    
    if(this.hashtable.has(key)){
        const node =  this.hashtable.get(key)
        node.val = value
        this.linkedList.moveToHead(node)
        
    }else{
        if(size>=this.capacity){
            const node =  this.linkedList.removeTail()
            this.hashtable.delete(node.key)
        }
        const newNode = new ListNode(key, value)
        this.hashtable.set(key, newNode)
        this.linkedList.addToHead(newNode)
    }
};


/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

