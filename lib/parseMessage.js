function parseMessage(message) {
  if(message[0] !== '@') {
    return null;
  } 

  const pattern = /@(?<command>\w*):?(?<arg>\w*)\s?(?<text>.*)?/;
  const match = pattern.exec(message);

  if(!match || !match.groups)

    return {
      command: 'cmd',
      args: 'asdads',
      text: 'asdasd'

    };
}

module.exports = parseMessage;
