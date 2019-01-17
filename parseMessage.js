// module.exports = message => {
//   function message(str) {
//     if(str.startsWith('@') === false) return null;
//   }

//   const actualMessage = message.slice(1);
//   actualMessage.indexOf(':');

//   return {
//     command: 'all',
//     args: 'nick',
//     text: 'hello'
//   };
// };

module.exports = str => {
  if(str[0] !== '@') return null;

  const pattern = /@(?<command>\w*):?(?<arg>\w*)\s?(?<text>.*)?/;
  const match = pattern.exec(str);

  if(!match || !match.groups) return null;

  return {
    command: match.groups.command,
    arg: match.groups.arg,
    text: match.groups.text
  };
};