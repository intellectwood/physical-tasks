
const findNum = require('../main/task8-10.js');



describe('求唯一只有一个的元素', () => {

    const arr = [1,1,2];




    it(' arr = [1,1,2] 只出现一个的元素是：\n', () => {

        const result = findNum (arr);
        console.log(' arr = [1,1,2] 只出现一个的元素是：\n'+result+'\n');
        expect(result).toEqual([2]);

    })





})
