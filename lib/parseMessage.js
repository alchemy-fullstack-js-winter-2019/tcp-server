module.exports = message => {
  if(message[0] !== '@') return null;

  const actualMessage = message.slice(1).split(':');

  return {
    cmd: 'something',
    args: 'ryanheontu',
    text: 'hi how are ya?'
  };
};
