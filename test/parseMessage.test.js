const parseMessage = require('../lib/parseMessage');


describe('it can parse a message', () => {

    it('can parse thing', () => {
        const toBeParsed = '@cmd:param some text';
        const message = parseMessage(toBeParsed);

        expect(message).toEqual(
            {
                cmd: 'cmd',
                arg: 'param',
                text: 'some text'
            });
    });

    it('can change a user`s name', () => {
        const toBeParsed = '@nick:Lance';
        const message = parseMessage(toBeParsed);
        expect(message).toEqual({ cmd: 'nick', arg: 'Lance', text: '' });
    });

    it('uses the dm command to dm another user', () => {
        const toBeParsed = '@dm:2 Hello Friend';
        const message = parseMessage(toBeParsed);
        expect(message).toEqual({ cmd: 'dm', arg: '2', text: 'Hello Friend' });
    });
});



