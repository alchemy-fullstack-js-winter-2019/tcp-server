module.exports = function parseMessage(message) {

  if(message[0] !== '@') return null;

  let actualMessage = message.slice(':', message[0], message.length);

  let msg = {
    command: '',
    arg: '',
    text: ''
  };

  let argIndex = message.indexOf(':');
  let textIndex = message.indexOf(' ');

  console.log(argIndex);
  console.log(textIndex);
  console.log(actualMessage);

};
