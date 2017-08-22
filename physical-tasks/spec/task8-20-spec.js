

const main = require('../main/task8-20.js');

describe('判断一个字符串中出现次数最多的字符，并统计次数', () => {



    it('判断str1 = ‘abcsbaddbizdbas’中出现次数最多的字符，并统计次数：\n', () => {
        const str1 = 'abcsbaddbizdbas';

        const result = main (str1);
        console.log('重复字符和次数：\n');     
         console.log(result); 
        
        expect(result).toEqual({b:4});

    });
   
 
     it('判断str2 = ‘aaaaabbdbdbb’中出现次数最多的字符，并统计次数：\n', () => {
        const str2 = 'aaaaabbdbdbb';

        const result = main (str2); 
        const resultKeys=Object.getOwnPropertyNames(result);
        
        console.log('重复字符和次数：\n');     
        console.log(result); 


        
        expect(result).toEqual({a:5,b:5});

    });
 
  });  
