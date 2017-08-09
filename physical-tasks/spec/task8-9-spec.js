
const getFibTask = require('../main/task8-9.js');



describe('求斐波那契数列指定位置的数值', () => {

    const num1 = 8;

    const num2 = 1;



    it('位置8：', () => {

        const result = getFibTask (num1);
        console.log("位置8："+result+'\n');
        expect(result).toEqual(13);

    })



    it('位置1：', () => {

        const result =getFibTask  (num2);
        console.log("位置1："+result+'\n');
        expect(result).toEqual(0);

    })

})
