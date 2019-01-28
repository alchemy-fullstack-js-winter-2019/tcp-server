/*eslint-disable no-console*/

const parseMessage = require('../lib/parseMessage');

describe('parseMessage', () => {
  it('it takes a string and returns an object based on msg contents', () => {
    expect(parseMessage('@cmd:param some text')).toEqual(
      {
        command: 'cmd',
        arg: 'param',
        text: 'some text'
      });
  });
  // Need more tests to test multiple input scenarios
  it('returns null if strings do not start with @', () => {
    expect(parseMessage('cmd:param some text')).toBeNull();
  });
});
