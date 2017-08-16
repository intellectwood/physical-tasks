const main = require('../main/task8-16.js');



describe('找出数组arr中重复过的元素', () => {




    it('a, ab, ed, da, a, ed, b 则重复过的元素为：\n', () => {
        const arr= ['a', 'ab', 'ed', 'da', 'a', 'ed', 'b'];
        const result = main (arr);
        console.log('a, ab, ed, da, a, ed, b 则重复过的元素为：\n'+result+'\n');
        expect(result).toEqual(['a', 'ed']);

    });





})
