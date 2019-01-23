const parseMessage = require('../lib/parseMessage');

describe('parseMessage', () => {
  it('can ignore strings that do not start with "@"', () => {
    const response = parseMessage('cmd:param some text');
    expect(response).toEqual(null);
  });

  it('can return a command object based on message contents', () => {
    const message = '@cmd:param some text';
    const response = parseMessage(message);
    const expected = {
      command: 'cmd',
      arg: 'param',
      text: 'some text'
    };
    expect(response).toEqual(expected);
  });

  it('is functional with the dm command', () => {
    const message = '@dm:ok kids, here we are.';
    const response = parseMessage(message);
    expect(response).toEqual({ command: 'dm', arg: 'is it working', text: 'some text' });
  });

  it('is functional with the nick command', () => {
    const message = '@nick:jj';
    const response = parseMessage(message);
    expect(response).toEqual({ command: 'nick', arg: 'jj', text: '' });
  });

  it('is functional with the all command', () => {
    const message = '@all howdy';
    const response = parseMessage(message);
    expect(response).toEqual({ command: 'all', arg: '', text: 'hi' });
  });
