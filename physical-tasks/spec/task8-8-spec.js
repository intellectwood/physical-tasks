
const getPrimeFactors = require('../main/task8-8.js');



describe('分解质因数', () => {

    const num1 = 90;

    const num2 = 77;



    it('1.分解90质因数', () => {

        const result = getPrimeFactors (num1);

        expect(result).toEqual('2335');

    })



    it('2.分解77质因数', () => {

        const result =getPrimeFactors  (num2);

        expect(result).toEqual('711');

    })

})