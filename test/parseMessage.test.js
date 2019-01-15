const message = require('./lib/parseMessage');

describe('parseMsg', () => {
  it('it takes a string and returns an object based on msg contents', () => {
    expect(parseMsg('@cmd:param some text')).toEqual({
      command: 'cmd',
      arg: 'param',
      text: 'some text'
    });
  });
});
