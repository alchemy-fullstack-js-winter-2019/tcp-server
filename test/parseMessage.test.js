const parseMessage = require('../lib/parseMessage');

describe('parseMessage', () => {
  it('returns an object with command, arg, and text', () => {
    expect(parseMessage('@cmd: param some text')).toEqual({
      command: 'cmd',
      arg: 'param',
      text: 'some text'
    });
  });

  it('ignores strings that do not start with @', () => {
    expect(parseMessage('banana')).toEqual(null);
  });

});
