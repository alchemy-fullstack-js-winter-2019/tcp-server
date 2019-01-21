
module.exports = message => {
  
  if(message[0] !== '@') return null;

  const pattern = /@(?<command>\w*):?(?<arg>\w*)\s?(?<text>.*)?/;
  const match = pattern.exec(message);

  if(!match || !match.groups) return null;
  //   //'@all hi there
  //   //'all hi there'
  //   // const actualMessage = message.slice(1);
  //   // //split on semicolon
  //   // actualMessage.indexOf(':');

  // return match.groups;

  return {
    command: 'something',
    args: 'ryanheontu',
    test:'ueohntuhoetu'
  };
};
