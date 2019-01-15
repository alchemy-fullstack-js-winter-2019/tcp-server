const parseMessage = require('../lib/parsedMessage');

describe('parseMessage', () => {
  it('parses the components out of a string', () => {
    
    expect(parseMessage('@cmd:param some text')).toEqual({
      command: 'cmd',
      arg: 'param',
      text: 'some text'
    });
  });
});
