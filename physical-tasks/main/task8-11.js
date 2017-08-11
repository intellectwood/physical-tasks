
/* #1 根据输入字符串，得到数字数组不包括val
* 输入：str:String val:number
* 处理：getNumArr()
* 输出：numArr:[number] 
*/

function getNumArr(str,val){
	let numArr=[];
	let strArr= str.split('->');
	for(let item of strArr){
		if(item != (val+'')) numArr.push(parseInt(item));

	}
	return  numArr;
}


/* #2 根据输入数字数组，得到字符串链表
* 输入：numArr:[number] 
* 处理：getNewStr()
* 输出：newStr:String 
*/

function getNewStr(numArr){

	let newStr='';
	let flg=0;
	newStr+=numArr[0];
	for(let item of numArr){
                if(flg>0) newStr+='->'+item;
              else flg++;
	}
	return   newStr;
}

function main(str, val)
{
    
    let result='1->2';
    let numArr=[];
  let newStr;
    numArr=getNumArr(str,val);
      newStr=getNewStr(numArr);
    console.log(newStr);
    result=newStr;
    return result;
}
module.exports = main;
