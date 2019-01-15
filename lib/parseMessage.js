
module.exports = str => {
  if(str[0] !== '@') return null;

  const commandObj = {};
  const splitStr = str.split(' ');
  const commandStr = splitStr[0].split(':');
  commandObj.command = commandStr[0].slice(1);
  commandObj.arg = commandStr[1];
  commandObj.text = splitStr.slice(1).join(' ');

  return commandObj;
};
