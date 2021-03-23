/*
 * @lc app=leetcode.cn id=65 lang=javascript
 *
 * [65] 有效数字
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
    // 正则表达式
    // return /^[+-]?(\d+\.\d+|\.\d+|\d+\.|\d+)([eE][+-]?\d+)?$/g.test(s)

    /**
     *  有限状态机解法
     *  先确定有几种状态和转义规则，画出图
     *  根据图写出图的邻接表
     */

    // 字符类型
    const CharType = {
        NUMBER: 'NUMBER', // 数字
        SIGN: 'SIGN', // +/- 符号
        POINT: 'POINT', // 小数点
        EXP: 'EXP', // 指数
        ILLEGAL: 'ILLEGAL' // 不合法的
    }

    // 状态类型
    const State = {
        INITIAL: 'INITIAL', // 初始状态
        INT_SIGN: 'INT_SIGN', // 整数符号
        INTEGER: 'INTEGER', // 整数
        POINT: 'POINT', // 小数点
        POINT_WITHOUT_INT: 'POINT_WITHOUT_INT', // 小数点左侧没有数字
        FRACTION: 'FRACTION', // 小数部分
        EXP: 'EXP', // e|E
        EXP_SIGN: 'EXP_SIGN', // 指数部分符号 +|-
        EXP_NUMBER: 'EXP_NUMBER', // 指数部分数字
    }

    // 图的邻接表
    const graph = {
        [State.INITIAL]: {
            [CharType.NUMBER]: State.INTEGER,
            [CharType.SIGN]: State.INT_SIGN,
            [CharType.POINT]: State.POINT_WITHOUT_INT
        },
        [State.INT_SIGN]: {
            [CharType.NUMBER]: State.INTEGER,
            [CharType.POINT]: State.POINT_WITHOUT_INT
        },
        [State.INTEGER]: {
            [CharType.NUMBER]: State.INTEGER,
            [CharType.POINT]: State.POINT,
            [CharType.EXP]: State.EXP
        },
        [State.POINT]: {
            [CharType.NUMBER]: State.FRACTION,
            [CharType.EXP]: State.EXP
        },
        [State.POINT_WITHOUT_INT]: {
            [CharType.NUMBER]: State.FRACTION,
        },
        [State.FRACTION]: {
            [CharType.NUMBER]: State.FRACTION,
            [CharType.EXP]: State.EXP
        },
        [State.EXP]: {
            [CharType.NUMBER]: State.EXP_NUMBER,
            [CharType.SIGN]: State.EXP_SIGN
        },
        [State.EXP_SIGN]: {
            [CharType.NUMBER]: State.EXP_NUMBER,
        },
        [State.EXP_NUMBER]: {
            [CharType.NUMBER]: State.EXP_NUMBER,
        },
    }

    const getCharType = (c)=>{
        if(c === '+' || c === '-'){
            return CharType.SIGN
        }else if(c === '.'){
            return CharType.POINT
        }else if(c === 'E' ||  c === 'e'){
            return CharType.EXP
        }else if(c >= '0' && c <= '9'){
            return CharType.NUMBER
        }else{
            return CharType.ILLEGAL
        }
    }

    let start = State.INITIAL

    for(let i=0; i<s.length; i++){
        const c = s[i]
        const type = getCharType(c)
        if(type === CharType.ILLEGAL) return false
        start = graph[start][type]
        // 没有可转移的状态
        if(!start) return false
    }

    if(start === State.INTEGER || start === State.POINT ||  start === State.FRACTION ||start === State.EXP_NUMBER){
        return true
    }else{
        return false
    }
};

// @lc code=end

