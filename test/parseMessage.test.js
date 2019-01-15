const parseMessage = require('../lib/parseMessage');

describe('parseMessage', () => {
  it('should exclude @', () => {
    expect(parseMessage('@cmd:param some text')).toEqual({
      command: 'cmd',
      arg: 'param',
      text: 'some text',
    });
  });
});
