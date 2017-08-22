

const main = require('../main/task8-19.js');

describe('数组去重', () => {




    it('数组去重：\n', () => {
        const arr = ['s', 'a', 's', 'b', 'a',1,'1',1] ;

        const result = main (arr);
        console.log(',数组去重：\n'+result+'\n');
        
        expect(result).toEqual(['s', 'a', 'b',1,'1']);

    });
  });  
