const main = require('../main/task8-17.js');



describe('数组arr每个元素求二次方', () => {




    it('数组arr = [5, 3, 7, 1]每个元素求二次方：\n', () => {
        const arr= [5, 3, 7, 1];
        const result = main (arr);
        console.log('数组arr = [5, 3, 7, 1]每个元素求二次方：\n'+result+'\n');
        expect(result).toEqual([25, 9, 49, 1]);

    });





})
