const ParseMessage = require('../lib/parseMessage');

describe('parses messages', () => {
  const message = new ParseMessage;
  it('ignores strings that do not start with "@"', () => {
    expect(message.charAt[0]).includes('@');
  });
});

