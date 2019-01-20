const parseMessage = require('../lib/parseMessage');

describe('parseMessage', () => {
  it('returns null when passed string that does NOT start with @', () => {
    expect(parseMessage('blah blah blah')).toEqual(null);
  });

  it('parses the components out of a string', () => {
    expect(parseMessage('@cmd:parameter some text more text')).toEqual({
      command: 'cmd',
      arg: 'parameter',
      text: 'some text more text'
    });
  });

  it('parses the components out of an @all message string', () => {
    expect(parseMessage('@all hello world!')).toEqual({
      command: 'all',
      arg: '',
      text: 'hello world!'
    });
  });

  it('parses the components out of an @dm message string', () => {
    expect(parseMessage('@dm:exampleuser Hello this is a direct message!')).toEqual({
      command: 'dm',
      arg: 'exampleuser',
      text: 'Hello this is a direct message!'
    });
  });

  it('parses the components out of a @nick message string', () => {
    expect(parseMessage('@nick:booboo')).toEqual({
      command: 'nick',
      arg: 'booboo',
      text: ''
    });
  });

});
