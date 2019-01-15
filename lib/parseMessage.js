module.exports = message => {
  if(message[0] !== '@') return null;
  // const pattern = /@(?<command>\w*):?(<arg>\w*)\s?(<text>.*)?/;
  // const match = pattern.exec(str);
  // above is Ryan's example
  
  const command = message.split(':');
  const args = message.split(1);
  const text = message.split(2);
  console.log(command);

  return {
    command: message.split(':'),
    args: 'myStuff',
    text: 'stuffyStuff'
  };
};
