describe('parseMessage', () => {
  it('returns an object with command, arg, and text', (command, arg, text) => {
    
    expect(parsedMessage('@cmd:param some text')).toEqual({
      command: 'cmd',
      arg: 'param',
      text: 'some text'
    });
  });