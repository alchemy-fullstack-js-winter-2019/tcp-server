const parseMessage = require('../lib/parseMessage');

describe('parseMessage', () => {
  it('can ignore strings that do not start with "@"', () => {
    expect(parseMessage('cmd:param some text')).toEqual(null);
  });

  it('can return a command object based on message contents', () => {
    const expected = {
      command: 'cmd',
      arg: 'param',
      text: 'some text'
    };
    expect(parseMessage('@cmd:param some text').toEqual(expected));
  });
});
