const parseMessage = require('../lib/parseMessage');

describe('parseMessage', () => {
  it('parse the components out of a string', () => {
    expect(parseMessage('@cmd:param some text')).toEqual({
      command: 'cmd',
      arg: 'param',
      text: 'some text'
    });
  });  

  it('Ignores strings that do not start with @', () => {
    const msg = 'How is everyone doing?';
    expect(parseMessage(msg)).toEqual(null);
  });
});
