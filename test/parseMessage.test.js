const parseMessage = require('../lib/parseMessage');
//To Do
describe('message parse', () => {
  it('ignores strings that do not start with @', () => {
    expect(parseMessage('does not start w@')).toEqual(null);
  });
});
it('returns an object', () => {
  expect('@cmd: param some text').toEqual({
    command: 'cmd',
    arg:'param',
    text: 'param text'
  });
});

//   it('parse the compoenents out of a string', () => {
//     expect(parseMessage('@cmd:param some text') => {
//       command: 'cmd',
//       arg: 'param',
//       text: 'param text'

//     })
//   })
// });
