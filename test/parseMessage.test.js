const parseMessage = require('../lib/parseMessage');

// named groups
describe('parseMessage', () => {
  it.only('returns an object with command, arg, and text', () => {
    expect(parseMessage('@cmd: param some text')).toEqual({
      command: 'cmd',
      arg: 'param',
      text: 'some text'
    });
  });

  it('ignores strings that do not start with @', () => {
    expect(parseMessage('banana')).toThrowError();
  });

});
