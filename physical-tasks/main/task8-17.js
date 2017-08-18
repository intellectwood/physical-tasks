

function main(arr)
{
    let result=[];
    let arr_changed=arr;
    
 	
	arr_changed=arr.map(i=>i*i);
    result=arr_changed;
    console.log(result);   

    return result;
}
module.exports = main;
