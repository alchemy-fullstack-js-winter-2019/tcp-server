const parseMessage = require('../lib/parseMessage');
//To Do
describe('message parse', () => {
  it('ignores strings that do not start with @', () => {
    expect(parseMessage('does not start w@')).toEqual(null);
  });
});
// To DO
// it('returns an object', () => {
//   expect({ command: 'cmd', text: 'param text' }).toContain({
//     command: 'cmd',
//     arg:'param',
//     text: 'param text'
//   });
// });


