// module.exports = str => {
//   if(str[0] !== '@') return null;

//   const pattern = /@(?<command>\w*):?(?<arg>\w)\s?(?<text>.*)?/;
//   const match = pattern.exec(str);

//   if(!match || !match.groups) return null;

//   return {
//     command: match.groups.command,
//     arg: match.groups.arg,
//     text: match.groups.text
//   };
// };

module.exports = message => {
  if(message[0] !== '@') return null;

  const realMessage = message.slice(1).split(':');
  /* eslint-disable-next-line */
  console.log(realMessage);

  const pattern = /@(?<command>\w*):?(?<arg>\w)\s?(?<text>.*)?/;

  return {
    cmd: pattern.group.command,
    arg: pattern.group.arg,
    text:pattern
  };
};