function func_rank_asc (collection){
    
    let result = collection.sort(function(a,b){

        return a - b;
    });
    return result;
}


function main(arr)
{
    let arr_sorted=func_rank_asc(arr);
    let result=3;

    let length=arr_sorted.length;

    
    if(length%2==0) {
        let upper_index=(length/2)-1;
        let lower_index=(length/2);
        
        result=(arr_sorted[upper_index]+arr_sorted[lower_index])/2;
        
    }
    else {
        let mid_index=parseInt(length/2);
          result=arr_sorted[mid_index];      
    }
    
    console.log(result);   

    return result;
}
module.exports = main;
