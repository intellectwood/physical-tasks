

const main = require('../main/task8-23.js');

describe('给定一个数组，该数组中的每个元素要么是个数组，要么是整数。将其变成一个只包含整数的简单数组', () => {



    it('给定一个数组，该数组中的每个元素要么是个数组，要么是整数。将其变成一个只包含整数的简单数组：\n', () => {
        let arr =  [4,[3,[2,[1]]]];

        const result = main (arr);
        console.log('给定一个数组arr =[4,[3,[2,[1]]]]，该数组中的每个元素要么是个数组，要么是整数。将其变成一个只包含整数的简单数组：\n');     
         console.log(result); 
        
        expect(result).toEqual( [4,3,2,1]);

    });
   
    it('给定一个数组，该数组中的每个元素要么是个数组，要么是整数。将其变成一个只包含整数的简单数组：\n', () => {
        let arr =  [1,2,[1,2]];

        const result = main (arr);
        console.log('给定一个数组arr =[1,2,[1,2]]，该数组中的每个元素要么是个数组，要么是整数。将其变成一个只包含整数的简单数组：\n');     
         console.log(result); 
        
        expect(result).toEqual( [1,2,1,2]);

    });

    it('给定一个数组，该数组中的每个元素要么是个数组，要么是整数。将其变成一个只包含整数的简单数组：\n', () => {
        let arr =  [1,2,[1,2],[3,4]];

        const result = main (arr);
        console.log('给定一个数组arr =[1,2,[1,2],[3,4]]，该数组中的每个元素要么是个数组，要么是整数。将其变成一个只包含整数的简单数组：\n');     
         console.log(result); 
        
        expect(result).toEqual( [1,2,1,2,3,4]);

    });   
 
  });  

