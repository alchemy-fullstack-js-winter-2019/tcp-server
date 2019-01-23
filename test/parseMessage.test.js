const parseMessage = require('../lib/parseMessage');
//To Do
describe('message parse', () => {
  it('ignores strings that do not start with @', () => {
    expect(parseMessage('does not start w@')).toEqual(null);
  });
});

it('returns an object', () => {
  expect(parseMessage('@cmd:param some text')).toEqual({
    command: 'cmd',
    args:'param',
    text: 'some text'
  });
});


