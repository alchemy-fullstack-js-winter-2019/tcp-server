
module.exports = message => {
  if(message[0] !== '@') return null;

  // const pattern = /@(?<command>\w*):?(?<arg>\w*)\s?(?<text>.*)?/;
  // const match = pattern.exec(message);

  // if(!match || !match.groups) return null;

  // return {
  //   command: match.groups.command,
  //   arg: match.groups.arg,
  //   text: match.groups.text
  // };

  // console.log(message.split(' ')); // [ '@cmd:param', 'some', 'text' ]
  // console.log(message.split(':')); // [ '@cmd', 'param some text' ]
  // console.log(message[0]); // @
  // console.log(message.split(':')[0]); // @cmd
  // console.log(message.indexOf(' ')); // 10 (first space after param)
  // console.log(message.slice(1, message.length)); // cmd:param some text

  let cmd = message.slice(1, 4);
  let argText = message.split(':').pop();
  let param = argText.slice(0, 5);
  let textArr = argText.split(' ').slice(1);
  let textStr = textArr.toString().replace(/,/g, ' ');

  return {
    command: cmd,
    arg: param,
    text: textStr
  };

};
