

function main(arr,item)
{
    let result=[];

    
	result=arr.map((currentVal, index)=>{if(currentVal==item) return index;});
    result=result.filter(val=> val!=undefined);
    console.log(result);   

 
    return result;
}
module.exports = main;
