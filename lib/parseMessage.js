module.exports = message => {
  //used example from https://flaviocopes.com/javascript-regular-expressions/#named-capturing-groups

  const re = /^@(?<command>\w*):?(?<arg>\w*)?\s(?<day>\w*)?/;
  const result = re.exec(message);

  return {
    command: result[1],
    arg: result[3],
    text: result.input.split(' ').slice(2).join(' ')
  };

};
