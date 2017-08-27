

function main(str,len,ch)
{


    let result='';

    len=len-str.length;
    
    if(len>0){
        if(!ch && ch!==0) ch='';
        result=Array(len+1).join(ch)+str;
        console.log(result); 
    }
    else{
        result="未指定正确长度,请重新输入";
    }

    return result;
}
module.exports = main;

