module.exports = message => {
  //used example from https://flaviocopes.com/javascript-regular-expressions/#named-capturing-groups

  const re = /^@(?<command>\w*):?(?<arg>\w*)?\s(?<text>\w*)?/;
  const result = re.exec(message);
  console.log(result);

  return {
    command: result.groups.command,
    arg: result[3],
    text: result.input.split(' ').slice(2).join(' ')
  };

};
