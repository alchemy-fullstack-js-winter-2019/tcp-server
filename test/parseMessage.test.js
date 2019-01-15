const parseMessage = require('../lib/parseMessage');

describe('parse message', () => {
  it('parses message into object', done => {
    expect(parseMessage('@cmd:param text').toEqual({
      command: 'cmd',
      arg: 'param',
      text: 'text'
    }));
    done();
  });

  it('changes username with @nick command', () => {
    const message = '@nick:Pete';
    const parsedMessage = parseMessage(message);
    expect(parsedMessage).toEqual({ command: 'nick', arg: 'Pete', text: '' });
  });

  it('can use the dm command to personally message another user', () => {
    const message = '@dm:user-2';
    const parsedMessage = parseMessage(message);
    expect(parsedMessage).toEqual({ command: 'dm', arg: 'user-2', text: 'Hello there!' });
  });

  it('sends a message to all users minus the user who sent it', () => {
    const message = '@all:Hello all';
    const parsedMessage = parseMessage(message);
    expect(parsedMessage).toEqual({ command: 'all', arg: '', text: 'Hello all' });
  });
});
