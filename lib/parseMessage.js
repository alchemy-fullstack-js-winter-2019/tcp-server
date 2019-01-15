function parseMessage(message) {
  if(message[0] !== '@') {
    return null;
  } 
  

    return {
      command: 'cmd',
      args: 'param',
      text: 'text'

    };
}

module.exports = parseMessage;
