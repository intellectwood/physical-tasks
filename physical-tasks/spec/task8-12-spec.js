const main = require('../main/task8-12.js');



describe('打印水仙花数', () => {






    it('val= 3 则符合水仙花的三位数有：\n', () => {
        const val1=3;
        const result = main (val1);
        console.log('val= 3 则符合水仙花的三位数有：\n'+result+'\n');
        expect(result).toEqual([153, 370, 371, 407 ]);

    })


    it('val= 4 则符合水仙花的三位数有：\n', () => {
        const val2=4;
        const result = main (val2);
        console.log('val= 4 则符合水仙花的数有：\n'+result+'\n');
        expect(result).toEqual([153, 370, 371, 407 ]);

    })



})
