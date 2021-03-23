/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

/**
 * 
 * 解题思路：
 * 利用栈后进先出的特点，
 * 有效的括号左括号和又括号的数量量一样多
 * 遍历字符串，遇到左括号入栈，遇到左括号时，将栈顶出栈并判断是否是一对
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {

    const stack = [];
    const map = {
        '{': '}',
        '[': ']',
        '(': ')'
    }

    if(s.length%2 ===1) {
        return false
    }

    if(!map[s.substring(0,1)]){
        return false
    }

    for(var i = 0; i<s.length; i++ ){
        const c = s.substring(i,i+1);

        if(map[c]){
            stack.push(c);
        }else{
            if(map[stack.pop()] !== c){
                return false
            }
        }
    }

    return stack.length === 0
   
};

// @lc code=end

