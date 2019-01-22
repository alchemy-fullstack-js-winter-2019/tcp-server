const parseMessage = require('../lib/parseMessage');

describe('parseMessage', () => {
  it('ignores strings that do not start with @', () => {
    expect(parseMessage('')).toBeNull();
  });
});
