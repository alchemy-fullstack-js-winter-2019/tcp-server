const message = require('./parseMessage');

describe('message', () => {
  it('it takes a string and returns a object based on msg content', () => {
    expect(message('@cmd: param some test')).toEqual(
      {
        command: 'cmd',
        arg: 'param',
        text: 'some text'
      }
    );
  });
});