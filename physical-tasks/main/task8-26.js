function main(ele)
{


    let resultArr=[];
    let result;
    let times=1;
    
    while(times<=ele){
        if(times%3==0 || times%5==0)resultArr.push(times+":");
        if(times%3==0) resultArr.push("fizz");  
        if(times%5==0) resultArr.push("buzz");
        times++;
    }
    result=resultArr.join(" ");


    return result;
}


module.exports = main;

