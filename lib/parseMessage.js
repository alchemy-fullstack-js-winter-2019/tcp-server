module.exports = message => { 
  let input = {};
  if(message[0] !== '@') return null; 

  else {
    const content = message.split('');
    const parseMessage = content[0].split(':');
    input.command = parseMessage[0].slice(1);
    input.text = content.slice(1).join('');
    input.argument = parseMessage[1];
    return input;
  }


  // const pattern = /@(?<command>\w*): ?(?<arg>\w*)\s?(?<text>.*)?/;

  // const match = pattern.exec(message);

  // if(!match || !match.groups) return null;
  // return {
  //   command: match.groups.command, 
  //   arg: match.groups.arg,
  //   text: match.groups.text
};
// };
