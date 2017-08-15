const main = require('../main/task8-15.js');



describe('找出数组arr中元素item的个数', () => {




    it('arr= [1,3,7,1,4] 则item==1出现的个数为：\n', () => {
        const arr=[1,3,7,1,4];
	  const item=1;
        const result = main (arr,item);
        console.log('arr= [1,3,7,1,4] 则item==1出现的个数为：\n'+result+'\n');
        expect(result).toEqual(2);

    })





})
