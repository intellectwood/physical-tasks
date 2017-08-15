

function main(arr, item)
{
    let result=2;
    let arr_changed=[];

    arr_changed=arr.filter((x)=>{if(x== item) return true});
    result=arr_changed.length;

    console.log(arr_changed);   

    return result;
}
module.exports = main;
