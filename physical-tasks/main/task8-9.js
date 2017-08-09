
 
function fib( n) //给一个数字n，代表数列的第n个元素，返回其数值
{
	if(n==1) return 0;
	if(n==2) return 1;

    return fib(n-1)+fib(n-2);
}

function getFibTask(n)
{
    let result=fib(n);
  
    return result;
}
module.exports = getFibTask;
