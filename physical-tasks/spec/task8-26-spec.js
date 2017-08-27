

const main = require('../main/task8-26.js');

describe(
`给你一个整数n. 从 1 到 n 按照下面的规则打印每个数：
如果这个数被3整除，打印fizz.
如果这个数被5整除，打印buzz.
如果这个数能同时被3和5整除，打印fizz buzz.`, () => {



    it(`给你一个整数n. 从 1 到 n 按照下面的规则打印每个数：
如果这个数被3整除，打印fizz.
如果这个数被5整除，打印buzz.
如果这个数能同时被3和5整除，打印fizz buzz.：\n`, () => {
      

        let ele=10;

        
        const result = main(ele);
        console.log(`给你一个整数n. 从 1 到 n 按照下面的规则打印每个数：
如果这个数被3整除，打印fizz.
如果这个数被5整除，打印buzz.
如果这个数能同时被3和5整除，打印fizz buzz.：\n`);     
         console.log(result); 
        
        expect(result).toEqual('fizz buzz fizz fizz buzz');

    });
    
 
  });  

