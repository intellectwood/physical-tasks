

const main = require('../main/task8-22.js');

describe('计算两个数组的交数组', () => {



    it('计算两个数组nums1 = [1, 2, 2, 1], nums2 = [2, 2], 的交数组：\n', () => {
        let nums1 = [1, 2, 2, 1], nums2 = [2, 2];

        const result = main (nums1,nums2);
        console.log('计算两个数组nums1 = [1, 2, 2, 1], nums2 = [2, 2], 的交数组：\n');     
         console.log(result); 
        
        expect(result).toEqual( [2, 2]);

    });
   
    it('计算两个数组nums1 = [1, 2, 2, 1], nums2 = [1, 2], 的交数组：\n', () => {
        let nums1 = [1, 2, 2, 1], nums2 = [1, 2];

        const result = main (nums1,nums2);
        console.log('计算两个数组nums1 = [1, 2, 2, 1], nums2 = [1, 2], 的交数组：\n');     
         console.log(result); 
        
        expect(result).toEqual( [1, 2]);

    });
 
  });  
