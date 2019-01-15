module.exports = message => {
  if(message[0] !== '@') return null;

  const actualMessage = message.slice(1);
  actualMessage.indexOf(':');

  return {
    command: 'cmd',
    arg: 'param',
    text: 'some text'
  };
};
