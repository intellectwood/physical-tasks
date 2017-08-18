const main = require('../main/task8-18.js');



describe('数组 arr 中查找值与 item 相等的元素出现的所有位置', () => {




    it('数组 arr 中查找值与 item 相等的元素出现的所有位置：\n', () => {
        const arr = [1, 3, 7, 1 ,4,] ;
	const item=1;
        const result = main (arr,item);
        console.log('arr = [1, 3, 7, 1 ,4,],与 item =1相等的元素出现的所有位置：\n'+result+'\n');
        expect(result).toEqual([0, 3]);

    });





})
