const parseMessage = require('../lib/parseMessage');


describe('it can parse a message', () => {

    it('can parse thing', () => {
        const toBeParsed = '@cmd:param some text';
        const message = parseMessage(toBeParsed);

        expect(message).toEqual(
            {
                cmd: '@cmd',
                arg: 'param',
                txt: 'some text'
            });
    });
});



