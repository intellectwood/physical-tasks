

function main(arr)
{
    let result=[];
    let arr_changed=arr;
    
 //   arr_changed=arr.filter((x,index,array)=> (array.indexOf(x) != array.lastIndexOf(x)) ) ;
    arr_changed=arr_changed.sort();   
   for(i=1;i<arr_changed.length;i++){
        if(arr_changed[i-1]==arr_changed[i]) result.push(arr_changed[i]);
    }
   
    console.log(result);   

    return result;
}
module.exports = main;
