
module.exports = message => {
  if(message[0] !== '@') return null;

  else {
    return {
      command: '',
      arg: 'args',
      text: 'text'
    };
  }
};
