const parseMessage = require('../lib/parseMessage');

describe('parseMessage', () => {
  it('parse the components out of a string', () => {
    expect(parseMessage('@cmd:param some text')).toEqual(
      {
        command: 'cmd',
        arg: 'param',
        text: 'some text'
      }
    );
  });
});
