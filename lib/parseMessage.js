module.exports = function parseMessage(message) {

  if(message[0] !== '@') return null;

  const actualMessage = message.slice(1);

  const msg = {
    command: '',
    arg: '',
    text: ''
  };

  const argIndex = actualMessage.indexOf(':');
  const textIndex = actualMessage.indexOf(' ');

  if(textIndex < 0) {
    msg.command = actualMessage.slice(0, argIndex);
    msg.arg = actualMessage.slice(argIndex + 1);
    msg.text = '';
  }

  else if(argIndex < 0) {
    msg.command = actualMessage.slice(0, textIndex);
    msg.arg = '';
    msg.text = actualMessage.slice(textIndex + 1);
  }

  else {
    msg.command = actualMessage.slice(0, argIndex);
    msg.arg = actualMessage.slice(argIndex + 1, textIndex);
    msg.text = actualMessage.slice(textIndex + 1); 
  }
  
  return msg;
};
