

function main(arr)
{
    let result=[];

    result[0]=arr[0];


 
     arr.forEach(itemArr=>{
         let flg=0;
        result.forEach(item=>{
            if(item === itemArr) flg=1;
        });
        if(flg==0) result.push(itemArr);                    
     });

         
    console.log(result);          

    return result;
}
module.exports = main;
