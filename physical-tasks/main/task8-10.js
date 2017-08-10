function findNum(arr)
{
    
    let result=[];
    let i,j;
    let flg=0;
    

    for(i=0;i<arr.length;i++){
      flg=0;
      for(j=0;j<arr.length;j++){
          if(i!=j){
              if(arr[i]==arr[j]) flg=1; //数组中有相同的
          }
      }
      if(flg==0) result.push(arr[i]);  //数组中没有相同的
    }
    
    return result;
}
module.exports = findNum;
