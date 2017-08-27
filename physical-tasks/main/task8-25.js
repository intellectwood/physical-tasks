function main(arr, ele)
{


    let result=[];
    let rear=[];
    
    result=arr.filter(item=>{
        if(item===ele) {rear.push(item); return false;}
        else return true;
    });

    rear.forEach(item=>result.push(item));


    return result;
}
module.exports = main;

