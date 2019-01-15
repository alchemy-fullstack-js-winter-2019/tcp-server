const parseMessage = require('../lib/parseMessage');

describe('parseMessage', () => {
  it('should exclude @', () => {
    expect(parseMessage('whats up')).toEqual(null);
  });
  it('atAll works', () => {
    expect(parseMessage('@all hi there')).toEqual({
      command: '@',
      text: 'all hi there'
    });
  });
});
