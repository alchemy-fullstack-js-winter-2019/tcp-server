const parseMessage = require('../lib/parseMessage');

describe('parse message', () => {
  it('parses message into object', done => {
    expect(parseMessage('@cmd:param some text').toEqual({
      command: 'cmd',
      arg: 'param',
      text: 'some text'
    }),
    {
      command: 'cmd',
      arg: 'param',
      text: 'some text'
    });
    done();
  });
});
