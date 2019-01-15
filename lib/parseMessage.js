module.exports = message => {
  if(message[0] !== '@' ) return null;

  const pattern = /@(?<command>\W*):?(?<arg>\)
  return {
    command: 'cmd',
    arg: 'param',
    text: 'some text'
  };
};

