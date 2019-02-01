const parseMessage = require('../lib/parseMessage');

describe('parseMessage', () => {
  it('ignores strings without @', () => {
    expect(parseMessage('no good')).toBeNull();
  });

  it('parses a message', () => {
    expect(parseMessage('@cmd:param some text')).toEqual({
      command: 'cmd',
      arg: 'param',
      text: 'some text'
    });
  });
  
  it('can change the username', () => {
    const message = '@Doobly:Mobly';
    const parsedMessage = parseMessage(message);
    expect(parsedMessage).toEqual({ command: 'Doobly', arg: 'Mobly' });
  });
});
