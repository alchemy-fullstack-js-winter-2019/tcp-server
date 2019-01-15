module.exports = message => { 
  if(message[0] !== '@') return null; 

  else {
    const content = message.split('');
    const parseMessage = content[0];
    const text = content.slice(1).join('');

    if(parseMessage.match(/:/)) {
      return {
        command: parseMessage.split(':')[0].slice(0),
        arg: parseMessage.split(':')[1].slice(0),
        text: text
      };
    }
    else {
      return {
        command: parseMessage,
        text:text
      };
    }

  }
};
