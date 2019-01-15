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
    expect(parseMessage('@cmd:param some text')).toEqual(expected);
  });

  it('is functional with the dm command', () => {
    const message = '@dm:kristin some text';
    const response = parseMessage(message);
    expect(response).toEqual({ command: 'dm', arg: 'kristin', text: 'some text' });
  });

  it('is functional with the nick command', () => {
    const message = '@nick:rachel';
    const response = parseMessage(message);
    expect(response).toEqual({ command: 'nick', arg: 'rachel', text: '' });
  });
});
