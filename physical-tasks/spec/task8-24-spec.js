

const main = require('../main/task8-24.js');

describe('字符串前面拼指定字符到固定长度', () => {



    it('leftpad(‘hello’,20,‘1’)，就要返回’111111111111111hello’：\n', () => {
      
        let str='hello';
        let len=20;
        let strToPaste=1;
        
        const result = main(str,len,strToPaste);
        console.log('leftpad(‘hello’,20,‘1’)，就要返回’111111111111111hello’：\n');     
         console.log(result); 
        
        expect(result).toEqual( '111111111111111hello');

    });
    
 
  });  

