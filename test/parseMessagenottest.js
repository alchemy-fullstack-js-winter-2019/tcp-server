const parseMessage = require('../lib/parseMessage');

describe('parseMessage', () => {
  //const incomingTestString1 = '@all '
  // const message = new ParseMessage;
  // it('ignores strings that do not start with "@"', () => {
  //   expect(message.charAt[0]).includes('@');
  // });
  it('takes strings starting with "@" and returns a parsed object', () => {
    expect(parseMessage('@cmd:param some text')).toEqual({
      command: 'cmd',
      arg: 'param',
      text: 'some text'
    });
  });
});

