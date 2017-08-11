const main = require('../main/task8-11.js');



describe('去除一个元素，形成新链表', () => {

    const str= "1->2->3->3->4->5->3";
    const val=3;



    it(' chain = “1->2->3->3->4->5->3”去除3，形成新链表：\n', () => {

        const result = main (str, val);
        console.log(' chain = 1->2->3->3->4->5->3  去除3，形成新链表：\n'+result+'\n');
        expect(result).toEqual('1->2->4->5');

    })





})
