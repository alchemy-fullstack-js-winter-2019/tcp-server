module.exports = function parseMessage(message) {

  if(message[0] !== '@') return null;

  let actualMessage = message.slice(message[1]);

  let msg = {
    command: '',
    arg: '',
    text: ''
  };

  let argIndex = actualMessage.indexOf(':');
  let textIndex = actualMessage.indexOf(' ');

  

  if(textIndex < 0) {
    msg.command = actualMessage.slice(1, argIndex);
    msg.arg = actualMessage.slice(argIndex + 1, actualMessage.length);
    msg.text = '';
  }

  else if(argIndex < 0) {
    msg.command = actualMessage.slice(1, textIndex);
    msg.arg = '';
    msg.text = actualMessage.slice(textIndex + 1);
  }

  else {
    msg.command = actualMessage.slice(1, argIndex);
    msg.arg = actualMessage.slice(argIndex + 1, textIndex || actualMessage.length);
    msg.text = actualMessage.slice(textIndex + 1, actualMessage.length);
   
    
  }

  return msg;

};
