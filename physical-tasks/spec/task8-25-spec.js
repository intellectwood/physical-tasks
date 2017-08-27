

const main = require('../main/task8-25.js');

describe('将数组中所包含的某个元素找出，并放在数组后面', () => {



    it('给出 nums = [0, 1, 0, 3, 12], target = 0; 调用函数之后, 得到nums = [1, 3, 12, 0, 0]：\n', () => {
      
        let arr=[0, 1, 0, 3, 12];
        let ele=0;

        
        const result = main(arr,ele);
        console.log('给出 nums = [0, 1, 0, 3, 12], target = 0; 调用函数之后, 得到nums = [1, 3, 12, 0, 0]：\n');     
         console.log(result); 
        
        expect(result).toEqual( [1, 3, 12, 0, 0]);

    });
    
 
  });  

