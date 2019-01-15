const parseMessage = require('../lib/parseMessage');

describe('parse message', () => {
  it('parses message into object', done => {
    const text = '@cmd:param text';
    const parsedMessage = parseMessage(text);
    expect(parsedMessage).toEqual({
      command: 'cmd',
      arg: 'param',
      text: 'text'
    });
    done();
  });

  it('changes username with @nick command', () => {
    const message = '@nick:Pete';
    const parsedMessage = parseMessage(message);
    expect(parsedMessage).toEqual({ command: 'nick', arg: 'Pete', text: '' });
  });

  it('can use the dm command to personally message another user', () => {
    const message = '@dm:user-2 Hey user-2';
    const parsedMessage = parseMessage(message);
    expect(parsedMessage).toEqual({ command: 'dm', arg: 'user-2', text: 'Hey user-2' });
  });
});
