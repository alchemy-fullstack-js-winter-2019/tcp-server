module.exports = function parseMessage(message) {
  if(message[0] !== '@') return null;
  
  const theMessage = message.slice(0);

  const msg = {
    command: '',
    arg: '',
    test: ''
  };

  let argIndex = theMessage.indexOf(':');
  const textIndex = theMessage.indexOf(' ');

  if(textIndex < 0) {
    msg.command = theMessage.slice(0, argIndex);
    msg.arg = theMessage.slice(argIndex + 1, theMessage.length);
    msg.text = '';
  }

  else if(argIndex < 0) {
    msg.command = theMessage.slice(0, textIndex);
    msg.arg = '';
    msg.text = theMessage.slice(textIndex + 1);
  }

  else {
    msg.command = theMessage.slice(0, argIndex);
    msg.arg = theMessage.slice(argIndex + 1, textIndex);
    msg.text = theMessage.slice(textIndex + 1);
  }

  return msg;
};
