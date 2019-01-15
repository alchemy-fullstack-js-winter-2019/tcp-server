
module.exports = message => {
  if(message[0] !== '@') return null;

  const newNoAt = message.slice(1, message.length); // cmd:param some text
  const indexOfColon = message.indexOf(':');
  const indexOfFirstSpace = message.indexOf(' ');
  const justCmd = newNoAt.split(':')[0];
  const colon = ':';

  let m = {
    command: '',
    arg: '',
    text: ''
  };

  if(message.includes(colon) ===  false) {
    m.command = 'all';
    m.arg = '';
    m.text = newNoAt.slice(indexOfFirstSpace, newNoAt.length);
  } else {
    m.command = justCmd;
    m.arg = newNoAt.slice(indexOfColon, indexOfFirstSpace - 1);
    m.text = newNoAt.slice(indexOfFirstSpace, newNoAt.length);
  }

  return m;
};
