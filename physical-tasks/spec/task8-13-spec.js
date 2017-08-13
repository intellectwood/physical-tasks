const main = require('../main/task8-13.js');



describe('找出中位数', () => {




    it('arr= [3,1,4,3] 则中位数是：\n', () => {
        const arr=[3,1,4,3];
        const result = main (arr);
        console.log('arr= [3,1,4,3] 则中位数是：\n'+result+'\n');
        expect(result).toEqual(3);

    })





})
