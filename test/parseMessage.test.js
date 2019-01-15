const parseMessage = require('../lib/parseMessage');

describe('parseMessage', () => {
  it('ignores strings that do not start with @', () => {
    
    expect(parseMessage('@cmd: param some text')).toEqual({
      command: 'cmd',
      arg: 'param',
      text: 'some text'
    });
  });
  it()
});
