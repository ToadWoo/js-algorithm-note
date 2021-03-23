
const a = {val: 'a'}
const b = {val: 'b'}
const c = {val: 'c'}
const d = {val: 'd'}
a.next = b
b.next = c
c.next = d


// 遍历链表
let p = a
while(p){
    console.log(p.val)
    p = p.next
}

// 插入
// 在c、d中间插入e
const e ={val: 'e'}
c.next = e
e.next = d

// 删除
// 删除前面插入的e
c.next = d