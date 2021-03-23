
/**
 * 十进制转二进制
 * 
 * 不断除以二，除到的结果作为下一次number，除的余数作为rem放入栈中，最后取出所有栈中元素连接成字符串
 */

function decimalToBinary(decNumber){
	const stack = [];		    //栈存放余数，栈顶到栈底的数就是要的二进制顺序
	let number = decNumber;		//我们需要不断得到的结果，作为下一次的除数
	let rem;					//作为除到的余数，不断放入栈中
	let binaryString = '';		//我们需要拼接出栈的元素，这个作为初始值

	while(number!==0){
		number = number >> 1
		rem = Math.floor(number%2)
		stack.push(rem)
	}

	while(stack.length){
		binaryString+=stack.pop().toString()
	}

	console.log(binaryString)

	return binaryString

}

