function getCountingObjArr(str){
      
    let result=[];

    let strArr=str.split('');
    
    strArr.forEach(strArrItem=>{
        let flg=0;
        result.forEach(item=>{
       
            if(Object.getOwnPropertyNames(item)[0]=== strArrItem) {
                flg=1; 
                item[strArrItem]++;
            }
        });
        if(flg==0) {
            let temp={};
            temp[strArrItem]=1;
            result.push(temp);                    
            }
    });
     
    
    
    return result;
}
function getMaxObjArr(countingArr){
   
    let maxKeyValue=0;
    let maxObj;
    let result=[];
    
    countingArr.forEach(item=>{

         if(item[ Object.getOwnPropertyNames(item).shift()] > maxKeyValue){
             maxKeyValue=item[ Object.getOwnPropertyNames(item).shift() ];   
             maxObj=item;
            
        }
       
    }); 
    result.push(maxObj);
    
     countingArr.forEach(item=>{
         if(item[ Object.getOwnPropertyNames(item).shift()] == maxKeyValue)
         result.push(item);
     });
    
    return result;
}
function main(str)
{

    let countingObjArr=[];
    let maxObjArr=[];
    let result={};
    
    countingObjArr=getCountingObjArr(str);
    maxObjArr=getMaxObjArr(countingObjArr);



    maxObjArr.forEach(item=>{
        result[ Object.getOwnPropertyNames(item).shift() ]=item[Object.getOwnPropertyNames(item).shift() ];
    });
            

    return result;
}
module.exports = main;

