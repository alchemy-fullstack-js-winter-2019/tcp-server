const message = require('../lib/parseMessage');

describe('message', () => {
  it('it takes a string and returns an object based on msg contents', () => {
    expect(message('@cmd:param some text')).toEqual(
      {
        command: 'cmd',
        arg: 'param',
        text: 'some text'
      });
  });

  
});
