

function main(nums1,nums2)
{


    let result=[];
    nums1.forEach(item=>{

        if(nums2.length!=0 && nums2.indexOf(item) !=-1){
           result.push(item);
           nums2.splice(nums2.indexOf(item),1);
        }
        
    });


    return result;
}
module.exports = main;

