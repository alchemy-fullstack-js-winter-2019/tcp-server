const parseMessage = require('../lib/parseMessage');

describe('parseMessage', () => {
  it('returns null when passed string that does NOT start with @', () => {
    expect(parseMessage('blah blah blah')).toEqual(null);
  });

  it('parses the components out of a string', () => {
    expect(parseMessage('@cmd:param some text')).toEqual({
      command: 'cmd',
      arg: 'param',
      text: 'some text'
    });
  });

});
