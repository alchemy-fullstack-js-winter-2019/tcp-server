function parseMessage(message) {
  if(message[0] !== '@') {
    return null;
  } 
  
  const splitMessage = message.slice(1).split(':');
  const messageArg = splitMessage[1].split(' ');
  const text = messageArg.slice(1).join(' ');

  let messageObj = {};

  messageObj.command = splitMessage[0];
  messageObj.arg = messageArg[0];
  messageObj.text = text;

  return messageObj;
}

module.exports = parseMessage;
