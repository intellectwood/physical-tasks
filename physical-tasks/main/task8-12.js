function getNumbit(num){
    let temp=num;
    let bits=0;
    
    while(temp>0){
        bits++;
        temp=parseInt(temp/10);
    }
                    
    return bits;
}

function main(val)
{
    
    let result=[];

    let num_max=1;

    while(val--) num_max*=10;
    
    for(num_candidate=1;num_candidate<num_max;num_candidate++){
            let times=getNumbit(num_candidate); 
            let temp = num_candidate;
            let num_bits=[];
            
            while(times--){
                num_bits.push(temp%10);
                temp=parseInt(temp/10);
            }
            
            let sum=0;
            let i;
            for(i=0;i<num_bits.length;i++){
                sum+=num_bits[i]*num_bits[i]*num_bits[i];
            }
            
            if(num_candidate==sum){
            result.push(num_candidate);}


    }
  
             console.log(result);   

    return result;
}
module.exports = main;
