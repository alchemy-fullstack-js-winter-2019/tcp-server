const parseMessage = require('../lib/parseMessage');

describe('parseMessage', () => {
  it('ignores chat commands that do not start with: @', () => {
    let response = parseMessage('Hello all`?');
    expect(response).toEqual(null);
  });
  it('atAll works', () => {
    let response = parseMessage('@all: whats up everybody');
    let result = {
      command: 'all',
      arg: '',
      text: 'whats up everybody'
    };
    expect(response).toEqual(result);
  });
  it('nick name', () => {
    let response = parseMessage('@nick: Kitten whats up everybody');
    let result = {
      command: 'nick',
      arg: '',
      text: 'Kitten whats up everybody'
    };
    expect(response).toEqual(result);
  });
});
