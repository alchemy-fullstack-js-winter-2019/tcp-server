const parseMessage = require('../lib/parseMessage');

describe('parseMessage', () => {
  it('parse the components out of a string', () => {
    expect(parseMessage('@cmd:param some text')).toEqual({
      command: 'cmd',
      arg: 'param',
      text: 'some text'
    });
  });  

  it('handles @nick command', () => {
    const parsedMsg = parseMessage('@nick:Menchu');
    expect(parsedMsg).toEqual({
      command: 'nick',
      arg: 'Menchu',
      text: ''
    });
  });

  it('handles @dm command', () => {
    const parsedMsg = parseMessage('@dm:Menchu hi there!');
    expect(parsedMsg).toEqual({
      command: 'dm',
      arg: 'Menchu',
      text: 'hi there!'
    });
  });

  it('handles @all command', () => {
    const parsedMsg = parseMessage('@all Hello all!');
    expect(parsedMsg).toEqual({
      command: 'all',
      arg: undefined,
      text: 'Hello all!'
    });
  });

  it('Ignores strings that do not start with @', () => {
    const msg = 'How is everyone doing?';
    expect(parseMessage(msg)).toEqual(null);
  });
});
