const parseMessage = require('../lib/parseMessage');

// named groups

expect(parseMessage('@cmd:param some text')).toEqual({
  command: 'cmd',
  arg: 'param',
  text: 'some text'
});
