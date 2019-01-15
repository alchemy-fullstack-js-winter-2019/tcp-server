module.exports = function parseMessage(message) {

  if(message[0] !== '@') return null;

  let actualMessage = message.slice(message[1], message.length);

  let msg = {
    command: '',
    arg: '',
    text: ''
  };

  let argIndex = actualMessage.indexOf(':');
  let textIndex = actualMessage.indexOf(' ');

  msg.command = actualMessage.slice(1, argIndex);
  msg.arg = actualMessage.slice(argIndex + 1, textIndex);
  msg.text = actualMessage.slice(textIndex + 1, message.length);

  return msg;

};
