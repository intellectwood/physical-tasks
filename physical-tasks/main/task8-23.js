function putItemToArr(itemArr, resultArr){
	
	if(typeof(itemArr) == 'number' ) resultArr.push(itemArr);
	else{
	    itemArr.forEach(item=>{
	         putItemToArr(item,resultArr);
	    });

	}
}


function main(itemArr)
{


    let result=[];


	putItemToArr(itemArr,result);

    return result;
}
module.exports = main;

